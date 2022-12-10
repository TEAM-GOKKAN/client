import React, { useRef, useState } from 'react';
import { useAtom } from 'jotai';
import {
  userProfileImageUrlAtom,
  userProfileImageFileAtom,
} from '../../store/signUpAtom';
import resizeFileToBase64 from '../../utils/resizeFileToBase64';
import resizeFileToFile from '../../utils/resizeFileToFile';
import UserProfileImage from './UserProfileImage';

const UserProfileImageContainer = () => {
  const [imgUrl, setImgUrl] = useAtom(userProfileImageUrlAtom);
  const [, setImgFile] = useAtom(userProfileImageFileAtom);
  const [warn, setWarn] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const changeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const fileUploaded = e.target.files[0];
    const type = fileUploaded.type?.split('/')[0];
    if (type === 'image') {
      setWarn('');
      // 미리보기 이미지를 갱신해주기 위해 uri를 변경함
      resizeFileToBase64(fileUploaded).then((uri) => setImgUrl(uri));
      // 업로드된 파일을 atom에 갱신해 줌
      resizeFileToFile(fileUploaded).then((file) => setImgFile(file));
    } else {
      // 파일의 타입이 image가 아닐 때 처리를 해 줌
      setWarn('이미지 파일만 입력 가능합니다.');
    }
  };

  const profileChangeButtonClick = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  return (
    <UserProfileImage
      info={{ imgUrl, profileChangeButtonClick, changeImg, fileInputRef, warn }}
    />
  );
};

export default UserProfileImageContainer;
