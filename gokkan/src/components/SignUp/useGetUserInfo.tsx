import { useEffect } from 'react';
import { getCustomAxios } from '../../utils/customAxios';
import { useAtom } from 'jotai';
import { setInitialUserInfo } from '../../store/signUpAtom';

const useGetUserInfo = () => {
  const customAxios = getCustomAxios();
  const [, setUserInfo] = useAtom(setInitialUserInfo);

  useEffect(() => {
    customAxios
      .get('api/v1/users')
      .then(({ data }) => {
        // 서버에 저장된 초기 사용자 정보를 입력해줌
        setUserInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};

export default useGetUserInfo;
