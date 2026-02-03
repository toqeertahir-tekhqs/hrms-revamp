import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from 'store/slices';

const useAxiosClient = () => {
  const queryClient = useQueryClient()
  const { token, preLoginToken } = useSelector((state) => state.states);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const encryptionKey = CryptoJS.enc.Utf8.parse(
    import.meta.env.VITE_ENCRYPTION_KEY1 +
      import.meta.env.VITE_ENCRYPTION_KEY2
  );
  // const aes_iv = AES_IV;
  // const aes_key = AES_KEY;
  // console.log('key', aes_iv, aes_key);

  const iv = CryptoJS.enc.Utf8.parse(
    import.meta.env.VITE_ENCRYPTION_IV1 + import.meta.env.VITE_ENCRYPTION_IV2
  );
  const secretKeyHeader = import.meta.env.VITE_HEADER_SECRET_KEY;
  const encryptPayload = (payload) => {
    const shouldEncrypt = import.meta.env.VITE_ENCRYPT !== 'false';

    if (!shouldEncrypt) {
      return payload;
    }
    const payloadString = JSON.stringify(payload);
    const encryptedPayload = CryptoJS.AES.encrypt(
      payloadString,
      encryptionKey,
      {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    ).toString();
    return {
      encryptedData: encryptedPayload,
    };
  };
  const decryptPayload = (encryptedPayload) => {
    const decryptedBytes = CryptoJS.AES.decrypt(
      encryptedPayload,
      encryptionKey,
      {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    const decryptedString = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedString);
  };
  const isPayloadEmpty = (payload) => {
    return (
      payload === null ||
      payload === undefined ||
      (typeof payload === 'object' && Object.keys(payload).length === 0) ||
      payload === ''
    );
  };

  const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      'X-HRMS-App-Secret': secretKeyHeader,
    },
  });
  const axiosClientPrelogin = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Bearer ${preLoginToken}`,
      'X-HRMS-App-Secret': secretKeyHeader,
    },
  });

  axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        queryClient.clear();
        dispatch(setToken(''));
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );
  axiosClientPrelogin.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        queryClient.clear();
        dispatch(setToken(''));
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );
  const getRequest = async (URL) => {
    try {
      const response = await axiosClient.get(URL, {
        headers: {
          'X-HRMS-App-Secret': secretKeyHeader,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Get Request Error:', error);
      throw error;
    }
  };
  const postRequestPreLogin = async (URL, payload) => {
    try {
      if (isPayloadEmpty(payload)) {
        const response = await axiosClientPrelogin.post(URL, undefined, {
          headers: {
            'X-HRMS-App-Secret': secretKeyHeader,
          },
        });
        return response.data;
      } else {
        const encryptedPayload = encryptPayload(payload);
        const response = await axiosClientPrelogin.post(URL, encryptedPayload, {
          headers: {
            'Content-Type': 'application/json',
            'X-HRMS-App-Secret': secretKeyHeader,
          },
        });
        return response.data;
      }
    } catch (error) {
      console.error('Post Request Error:', error);
      throw error;
    }
  };

  const postRequest = async (URL, payload) => {
    try {
      if (isPayloadEmpty(payload)) {
        const response = await axiosClient.post(URL, undefined, {
          headers: {
            'X-HRMS-App-Secret': secretKeyHeader,
          },
        });
        return response.data;
      } else {
        const encryptedPayload = encryptPayload(payload);
        const response = await axiosClient.post(URL, encryptedPayload, {
          headers: {
            'Content-Type': 'application/json',
            'X-HRMS-App-Secret': secretKeyHeader,
          },
        });
        return response.data;
      }
    } catch (error) {
      console.error('Post Request Error:', error);
      throw error;
    }
  };

  const postRequestWithToken = async (URL, payload, withToken) => {
    try {
      if (isPayloadEmpty(payload)) {
        const response = await axios
          .create({
            baseURL: import.meta.env.VITE_BASE_URL,
            headers: {
              Authorization: `Bearer ${withToken}`,
              'X-HRMS-App-Secret': secretKeyHeader,
            },
          })
          .post(URL, undefined, {
            headers: {
              'X-HRMS-App-Secret': secretKeyHeader,
            },
          });
        return response.data;
      } else {
        const encryptedPayload = encryptPayload(payload);
        const response = await axios
          .create({
            baseURL: import.meta.env.VITE_BASE_URL,
            headers: {
              Authorization: `Bearer ${withToken}`,
              'X-HRMS-App-Secret': secretKeyHeader,
            },
          })
          .post(URL, encryptedPayload, {
            headers: {
              'Content-Type': 'application/json',
              'X-HRMS-App-Secret': secretKeyHeader,
            },
          });
        return response.data;
      }
    } catch (error) {
      console.error('Post Request Error:', error);
      throw error;
    }
  };

  const putRequest = async (URL, payload) => {
    try {
      if (isPayloadEmpty(payload)) {
        const response = await axiosClient.put(URL, undefined, {
          headers: {
            'X-HRMS-App-Secret': secretKeyHeader,
          },
        });
        return response.data;
      } else {
        const encryptedPayload = encryptPayload(payload);
        const response = await axiosClient.put(URL, encryptedPayload, {
          headers: {
            'Content-Type': 'application/json',
            'X-HRMS-App-Secret': secretKeyHeader,
          },
        });
        return response.data;
      }
    } catch (error) {
      console.error('Put Request Error:', error);
      throw error;
    }
  };

  const patchRequest = async (URL, payload) => {
    try {
      if (isPayloadEmpty(payload)) {
        const response = await axiosClient.patch(URL, undefined, {
          headers: {
            'X-HRMS-App-Secret': secretKeyHeader,
          },
        });
        return response.data;
      } else {
        const encryptedPayload = encryptPayload(payload);
        const response = await axiosClient.patch(URL, encryptedPayload, {
          headers: {
            'Content-Type': 'application/json',
            'X-HRMS-App-Secret': secretKeyHeader,
          },
        });
        return response.data;
      }
    } catch (error) {
      console.error('Patch Request Error:', error);
      throw error;
    }
  };

  const deleteRequest = async (URL) => {
    try {
      const response = await axiosClient.delete(URL, {
        headers: {
          'X-HRMS-App-Secret': secretKeyHeader,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Delete Request Error:', error);
      throw error;
    }
  };

  const postRequestFormData = async (URL, payload) => {
    try {
      const formData = new FormData();
      for (const key in payload) {
        if (Array.isArray(payload[key])) {
          payload[key].forEach((file) => {
            formData.append(key, file);
          });
        } else {
          formData.append(key, payload[key]);
        }
      }
      const response = await axiosClient.post(URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-HRMS-App-Secret': secretKeyHeader,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Post FormData Request Error:', error);
      throw error;
    }
  };

  return {
    getRequest,
    postRequest,
    patchRequest,
    deleteRequest,
    postRequestFormData,
    putRequest,
    postRequestPreLogin,
    postRequestWithToken,
  };
};

export default useAxiosClient;
