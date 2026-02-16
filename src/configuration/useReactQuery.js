import axios from 'axios';
import CryptoJS from 'crypto-js';
import {
  useQuery,
  useQueryClient,
  useMutation as useRQMutation,
} from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from 'store/slices';

const useReactQuery = () => {
  const queryClient = useQueryClient();
  const { token } = useSelector((state) => state.states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const encryptionKey = CryptoJS.enc.Utf8.parse(
    import.meta.env.VITE_ENCRYPTION_KEY1 +
    import.meta.env.VITE_ENCRYPTION_KEY2
  );

  const iv = CryptoJS.enc.Utf8.parse(
    import.meta.env.VITE_ENCRYPTION_IV1 +
    import.meta.env.VITE_ENCRYPTION_IV2
  );

  const secretKeyHeader = import.meta.env.VITE_HEADER_SECRET_KEY;

  /* =========================
     ENCRYPT / DECRYPT
  ========================== */

  const encryptPayload = (payload) => {
    const shouldEncrypt = import.meta.env.VITE_ENCRYPT !== 'false';

    if (!shouldEncrypt) return payload;

    const encryptedPayload = CryptoJS.AES.encrypt(
      JSON.stringify(payload),
      encryptionKey,
      {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    ).toString();

    return { encryptedData: encryptedPayload };
  };

  const isPayloadEmpty = (payload) => {
    return (
      payload === null ||
      payload === undefined ||
      (typeof payload === 'object' && Object.keys(payload).length === 0) ||
      payload === ''
    );
  };

  /* =========================
     AXIOS CLIENT
  ========================== */

  const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      'X-HRMS-App-Secret': secretKeyHeader || undefined,
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

  /* =========================
     FETCHERS
  ========================== */

  const fetcher = async (URL) => {
    const res = await axiosClient.get(URL);
    return res.data;
  };

  const postFetcher = async ({ URL, payload }) => {
    const body = isPayloadEmpty(payload)
      ? undefined
      : encryptPayload(payload);

    const res = await axiosClient.post(URL, body, {
      headers: {
        'Content-Type': 'application/json',
        'X-HRMS-App-Secret': secretKeyHeader,
      },
    });

    return res.data;
  };

  /* =========================
     GET QUERY
  ========================== */

  const useGetRequest = (
    URL,
    key,
    options = {
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
    }
  ) => {
    return useQuery([key ?? URL, URL], () => fetcher(URL), {
      ...options,
    });
  };

  /* =========================
     POST QUERY (RARE USE)
  ========================== */

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
      { ...options }
    );
  };

  /* =========================
     MUTATION (MAIN FIX)
  ========================== */

  const usePostMutation = (
    URL,
    key,
    options = {}
  ) => {
    return useRQMutation(
      (payload) => {
        const actualURL = typeof URL === 'function' ? URL(payload) : URL;
        return postFetcher({ URL: actualURL, payload });
      },
      {
        mutationKey: [key ?? (typeof URL === 'string' ? URL : 'dynamic-mutation'), URL], // key ?? URL might be function, so fallback safely

        onSuccess: () => {
          // optional: invalidate related queries
          if (typeof URL === 'string') {
            queryClient.invalidateQueries(key ?? URL);
          } else if (key) {
            queryClient.invalidateQueries(key);
          }
        },

        ...options,
      }
    );
  };

  return {
    useGetRequest,
    usePostRequest,
    usePostMutation,
  };
};

export default useReactQuery;
