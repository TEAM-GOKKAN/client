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
      if (localAccessToken) {
        if (!config.headers) return config;
        if (!config.headers.Authorization) {
          config.headers['Authorization'] = 'Bearer ' + localAccessToken;
        }
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
            const newAxios = axios.create();
            delete newAxios.defaults.headers.common['Authorization'];
            const rs = await newAxios.get(
              'http://3.38.59.40:8080/api/v1/auth/refresh',
              {
                params: {
                  refreshToken: localRefreshToken,
                },
              }
            );
            const accessToken = rs.data;
            setLocalAccessToken(accessToken);

            originalConfig.headers.Authorization = 'Bearer ' + accessToken;
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
