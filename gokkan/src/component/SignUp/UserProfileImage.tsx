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

const UserProfileImage = () => {
  const [imgUrl, setImgUrl] = useAtom(userProfileImageUrlAtom);
  const [, setImgFile] = useAtom(userProfileImageFileAtom);
  const [warn, setWarn] = useState('');
  const fileInput = useRef<any>(null);

  useEffect(() => {
    if (imgUrl === '') {
      setImgUrl('/src/asset/userDefaultImage.png');
    }
  }, []);

  const resizeFileToFile = (file: File) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1920,
        1920,
        'JPEG',
        100,
        0,
        (file) => {
          resolve(file);
        },
        'file'
      );
    }).then((file) => {
      setImgFile(file);
    });

  const resizeFileTobase64 = (file: File) => {
    return new Promise((resolve: (uri: string) => any) => {
      Resizer.imageFileResizer(
        file,
        1920,
        1920,
        'JPEG',
        100,
        0,
        (uri) => {
          const stringUrl = String(uri);
          resolve(stringUrl);
        },
        'base64'
      );
    }).then((uri) => {
      setImgUrl(uri);
    });
  };

  const changeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
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
