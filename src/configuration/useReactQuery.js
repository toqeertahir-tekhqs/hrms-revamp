import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from 'store/slices';

const useReactQuery = () => {
  const queryClient = useQueryClient()
  const { token } = useSelector((state) => state.states);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const encryptionKey = CryptoJS.enc.Utf8.parse(
    import.meta.env.VITE_ENCRYPTION_KEY1 + import.meta.env.VITE_ENCRYPTION_KEY2
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
      'X-HRMS-App-Secret': secretKeyHeader || undefined,
    },
  });

  // Add response interceptor
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

  const fetcher = async (URL) => {
    const response = await axiosClient.get(URL);
    return response.data;
  };

  const useGetRequest = (URL, key, options = {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
    retry: 1,
  }) => {
    return useQuery([key ?? URL, URL], () => fetcher(URL), {
      ...options,
    });
  };

  const postFetcher = async ({ URL, payload }) => {
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

  const usePostRequest = (
    URL,
    key,
    payload,
    options = {
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
    }
  ) => {
    return useQuery(
      [key ?? URL, URL, JSON.stringify(payload)],
      () => postFetcher({ URL, payload }),
      {
        ...options,
      }
    );
  };

  return {
    useGetRequest,
    usePostRequest
  };
};

export default useReactQuery;
