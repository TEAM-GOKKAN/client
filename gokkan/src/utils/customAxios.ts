import axios, { AxiosInstance } from 'axios';
import { useAtom } from 'jotai';
import { accessTokenAtom, refreshTokenAtom } from '../store/tokenAtom';

const getCustomAxios = () => {
  const url = 'http://3.38.59.40:8080/';
  const [localAccessToken, setLocalAccessToken] = useAtom(accessTokenAtom);
  const [localRefreshToken] = useAtom(refreshTokenAtom);
  const customAxios: AxiosInstance = axios.create({
    baseURL: `${url}`,
  });

  customAxios.interceptors.request.use(
    (config) => {
      const token = localAccessToken;
      if (token) {
        if (!config.headers) return config;
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  customAxios.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
      if (originalConfig.url !== '/auth/signin' && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await customAxios.post('/auth/refresh', {
              refreshToken: localRefreshToken,
            });

            const { accessToken } = rs.data;
            setLocalAccessToken(accessToken);

            return customAxios(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(err);
    }
  );

  return customAxios;
};

export { getCustomAxios };
