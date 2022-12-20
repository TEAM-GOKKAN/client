import { useEffect } from 'react';
import { getCustomAxios } from '../../utils/customAxios';
import { useAtom } from 'jotai';
import { setInitialUserInfo } from '../../store/signUpAtom';
import queryString from 'query-string';

const useGetUserInfo = () => {
  const customAxios = getCustomAxios();
  const [, setUserInfo] = useAtom(setInitialUserInfo);

  useEffect(() => {
    const queryParam = queryString.parse(window.location.search);
    const token = queryParam?.token;
    if (token) {
      customAxios
        .get('api/v1/users')
        .then(({ data }) => {
          const initalUserInfo = {
            name: data.name,
            profileImageUrl: data.profileImageUrl,
          };
          setUserInfo(initalUserInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
};

export default useGetUserInfo;
