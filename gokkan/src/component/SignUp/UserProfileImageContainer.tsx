import React, { useRef, useState } from 'react';
import { useAtom } from 'jotai';
import {
  userProfileImageUrlAtom,
  userProfileImageFileAtom,
} from '../../store/signUpAtom';
import { fileListToBase64 } from '../../utils/resizeFile';
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
      fileListToBase64([fileUploaded]).then((uriList) => setImgUrl(uriList[0]));
      setImgFile(fileUploaded);
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
