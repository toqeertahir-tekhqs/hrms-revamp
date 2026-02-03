import axios from "axios";
import toast from "~/components/Toast";

// File type configurations
const FILE_TYPES = {
    IMAGE: {
        PNG: 'image/png',
        JPEG: 'image/jpeg',
        JPG: 'image/jpg',
        GIF: 'image/gif',
        WEBP: 'image/webp',
        SVG: 'image/svg+xml'
    },
    DOCUMENT: {
        PDF: 'application/pdf',
        DOC: 'application/msword',
        DOCX: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        XLS: 'application/vnd.ms-excel',
        XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        PPT: 'application/vnd.ms-powerpoint',
        PPTX: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        TXT: 'text/plain',
        CSV: 'text/csv'
    },
    ARCHIVE: {
        ZIP: 'application/zip',
        RAR: 'application/x-rar-compressed'
    }
};

// Helper to get MIME type from file extension
const getMimeTypeFromExtension = (extension) => {
    const ext = extension?.toLowerCase().replace('.', '');
    const extToMime = {
        'png': FILE_TYPES.IMAGE.PNG,
        'jpg': FILE_TYPES.IMAGE.JPG,
        'jpeg': FILE_TYPES.IMAGE.JPEG,
        'gif': FILE_TYPES.IMAGE.GIF,
        'webp': FILE_TYPES.IMAGE.WEBP,
        'svg': FILE_TYPES.IMAGE.SVG,
        'pdf': FILE_TYPES.DOCUMENT.PDF,
        'doc': FILE_TYPES.DOCUMENT.DOC,
        'docx': FILE_TYPES.DOCUMENT.DOCX,
        'xls': FILE_TYPES.DOCUMENT.XLS,
        'xlsx': FILE_TYPES.DOCUMENT.XLSX,
        'ppt': FILE_TYPES.DOCUMENT.PPT,
        'pptx': FILE_TYPES.DOCUMENT.PPTX,
        'txt': FILE_TYPES.DOCUMENT.TXT,
        'csv': FILE_TYPES.DOCUMENT.CSV,
        'zip': FILE_TYPES.ARCHIVE.ZIP,
        'rar': FILE_TYPES.ARCHIVE.RAR
    };

    return extToMime[ext] || 'application/octet-stream';
};

// Helper to get extension from MIME type
const getExtensionFromMimeType = (mimeType) => {
    const mimeToExt = {
        'image/png': 'png',
        'image/jpeg': 'jpg',
        'image/jpg': 'jpg',
        'image/gif': 'gif',
        'image/webp': 'webp',
        'image/svg+xml': 'svg',
        'application/pdf': 'pdf',
        'application/msword': 'doc',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
        'application/vnd.ms-excel': 'xls',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
        'application/vnd.ms-powerpoint': 'ppt',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
        'text/plain': 'txt',
        'text/csv': 'csv',
        'application/zip': 'zip',
        'application/x-rar-compressed': 'rar'
    };

    return mimeToExt[mimeType] || 'bin';
};
const getExtensionFromMimeTypePayload = (mimeType) => {
    const mimeToExt = {
        'image/png': 'image/png',
        'image/jpeg': 'image/jpeg',
        'image/jpg': 'image/jpg',
        'image/gif': 'image/gif',
        'image/webp': 'image/webp',
        'image/svg+xml': 'image/svg+xml',
        'application/pdf': 'application/pdf',
        'application/msword': 'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'application/msword',
        'application/vnd.ms-excel': 'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'application/vnd.ms-excel',
        'application/vnd.ms-powerpoint': 'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'application/vnd.ms-powerpoint',
        'text/plain': 'text/plain',
        'text/csv': 'text/csv',
        'application/zip': 'application/zip',
        'application/x-rar-compressed': 'application/x-rar-compressed'
    };

    return mimeToExt[mimeType] || 'bin';
};
// Loading state management
const createLoadingState = (loading = false, id = null, type = null) => ({
    loading,
    id,
    type
});

const getInitialLoadingState = () => createLoadingState();

const getUpdateLoadingState = (type, id) => createLoadingState(true, id, type);

// Core file download/preview handler
const handleFileDownload = async ({
    route,
    token,
    fileName,
    setLoading,
    action = 'preview' // 'preview' or 'download'
}) => {
    try {
        if (!route) {
            toast.error('Route is required');
            return { success: false, error: 'Route is required' };
        }

        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}${route}`,
            {
                responseType: 'blob',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const blob = new Blob([response.data], { type: response?.data?.type });
        const fileURL = URL.createObjectURL(blob);
        if (action === 'preview') {
            window.open(fileURL, '_blank', 'noopener,noreferrer');
        }
        else if (action === 'download') {
            // Trigger download
            const link = document.createElement('a');
            link.href = fileURL;
            link.download = fileName || `download_${Date.now()}.${getExtensionFromMimeType(response?.data?.type)}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(fileURL);
        }

        return { success: true, fileURL };
    } catch (error) {
        const errorMessage = action === 'preview'
            ? error?.response?.data?.message || 'Document not found'
            : error?.response?.data?.message || 'Document not found';
        toast.error(errorMessage);
        return { success: false, error };
    } finally {
        if (setLoading) {
            setLoading(getInitialLoadingState());
        }
    }
};

// Main wrapper function - supports your existing parameter structure
const handleDownloadDocuments = async ({
    name,           // Display name (optional)
    type,           // File type/extension (e.g., 'pdf', 'xlsx', '.docx')
    setLoading,
    loading,
    token,
    fileName,       // Actual filename for download
    route,
    id,
    action = 'preview' // 'download' or 'preview'
}) => {
    // Check if another operation is in progress
    if (loading?.loading) {
        toast.warning('Another operation in progress');
        return;
    }

    // Set loading state
    setLoading(getUpdateLoadingState(type, id));

    // Determine MIME type from file extension/type
    const mimeType = getMimeTypeFromExtension(type);
    // Execute the download/preview
    return await handleFileDownload({
        route,
        token,
        mimeType,
        fileName,
        setLoading,
        action
    });
};

// Convenience functions for specific operations
const handleImagePreview = (params) =>
    handleDownloadDocuments({ ...params, action: 'preview' });

const handleImageDownload = (params) =>
    handleDownloadDocuments({ ...params, action: 'download' });

const handlePDFPreview = (params) =>
    handleDownloadDocuments({
        ...params,
        type: params.type || 'pdf',
        action: 'preview'
    });

const handlePDFDownload = (params) =>
    handleDownloadDocuments({
        ...params,
        type: params.type || 'pdf',
        action: 'download'
    });

const handleDocumentPreview = (params) =>
    handleDownloadDocuments({ ...params, action: 'preview' });

const handleDocumentDownload = (params) =>
    handleDownloadDocuments({ ...params, action: 'download' });

// Legacy function for backward compatibility
const downloadFileWithGetRequest = async ({
    route,
    token,
    responseType = 'blob',
    setLoaderFile,
    dispatch,
    fileName = 'Download',
    extension = 'xlsx'
}) => {
    try {
        if (dispatch) {
            dispatch(setLoaderFile(true));
        } else {
            setLoaderFile(true);
        }

        const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/${route}`,
            {
                responseType: 'blob',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const mimeType = getMimeTypeFromExtension(extension);
        const blob = new Blob([response.data], { type: mimeType });

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `${fileName}.${extension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    } catch (error) {
        console.error('Download failed:', error);
        toast.error('Download failed');
    } finally {
        if (dispatch) {
            dispatch(setLoaderFile(false));
        } else {
            setLoaderFile(false);
        }
    }
};

// Export all utilities
export {
    FILE_TYPES, downloadFileWithGetRequest, getExtensionFromMimeType, getExtensionFromMimeTypePayload, getInitialLoadingState, getMimeTypeFromExtension, getUpdateLoadingState, handleDocumentDownload, handleDocumentPreview, handleDownloadDocuments, handleFileDownload, handleImageDownload, handleImagePreview, handlePDFDownload, handlePDFPreview
};

