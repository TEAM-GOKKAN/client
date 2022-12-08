import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import {
  userProfileImageUrlAtom,
  userProfileImageFileAtom,
} from '../../store/signUpAtom';
import Resizer from 'react-image-file-resizer';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 10vw;
  img {
    width: 80%;
    height: 80%;
    border: 1px solid black;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  input {
    display: none;
  }
  p {
    color: red;
  }
`;

const UserProfileImage = () => {
  const [imgUrl, setImgUrl] = useAtom(userProfileImageUrlAtom);
  const [, setImgFile] = useAtom(userProfileImageFileAtom);
  const [warn, setWarn] = useState('');
  const fileInput = useRef(null);

  useEffect(() => {
    if (imgUrl === '') {
      setImgUrl('/src/asset/userDefaultImage.png');
    }
  }, []);

  const resizeFileToFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1920,
        1920,
        'JPEG',
        100,
        0,
        (file) => {
          setImgFile(file);
        },
        'file'
      );
    });
  const resizeFileTobase64 = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1920,
        1920,
        'JPEG',
        100,
        0,
        (uri) => {
          setImgUrl(uri);
        },
        'base64'
      );
    });

  const changeImg = (e) => {
    const fileUploaded = e.target.files[0];
    const type = fileUploaded.type?.split('/')[0];
    if (type === 'image') {
      setWarn('');
      resizeFileTobase64(fileUploaded);
      resizeFileToFile(fileUploaded);
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

export default UserProfileImage;
