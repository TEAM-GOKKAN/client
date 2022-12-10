import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import {
  userProfileImageUrlAtom,
  userProfileImageFileAtom,
} from '../../store/signUpAtom';
import resizeFileToBase64 from '../../utils/resizeFileToBase64';
import resizeFileToFile from '../../utils/resizeFileToFile';
import UserProfileImage from './UserProfileImage';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  width: 100%;
  height: 30%;
  img {
    width: 60%;
    height: 60%;
    border: 1px solid black;
    border-radius: 50%;
  }
  button {
    margin-top: 2vh;
  }
  input {
    display: none;
  }
  p {
    color: red;
  }
`;

const UserProfileImageContainer = () => {
  const [imgUrl, setImgUrl] = useAtom(userProfileImageUrlAtom);
  const [, setImgFile] = useAtom(userProfileImageFileAtom);
  const [warn, setWarn] = useState('');
  const fileInput = useRef<any>(null);

  useEffect(() => {
    if (imgUrl === '') {
      setImgUrl('/src/asset/userDefaultImage.png');
    }
  }, []);

  const changeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const fileUploaded = e.target.files[0];
    const type = fileUploaded.type?.split('/')[0];
    if (type === 'image') {
      setWarn('');
      resizeFileToBase64(fileUploaded).then((uri) => setImgUrl(uri));
      resizeFileToFile(fileUploaded).then((file) => setImgFile(file));
    } else {
      setWarn('이미지 파일만 입력 가능합니다.');
    }
  };

  const profileChangeButtonClick = () => {
    fileInput.current.click();
  };

  return (
    <ProfileWrapper>
      <img alt="유저 프로필 이미지" src={imgUrl} />
      <button onClick={profileChangeButtonClick}>프로필 이미지 변경</button>
      <input
        type="file"
        accept="image/jpg,impge/png,image/jpeg,image/gif"
        onChange={changeImg}
        ref={fileInput}
      />
      {warn !== '' && <p>*{warn}</p>}
    </ProfileWrapper>
  );
};

export default UserProfileImageContainer;
