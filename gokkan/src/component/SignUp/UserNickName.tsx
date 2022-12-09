import React from 'react';
import { userNickNameAtom } from '../../store/signUpAtom';
import { useAtom } from 'jotai';
import styled from 'styled-components';

const NickNameWrapper = styled.div`
  display: flex;
  font-size: 18px;
  margin-top: 3vh;
  input {
    margin-left: 2vw;
    padding-left: 2vw;
    width: 70vw;
    font-size: 18px;
  }
`;

const UserNickName = () => {
  const [nickName, setNickName] = useAtom(userNickNameAtom);

  const inputNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  return (
    <NickNameWrapper>
      <div>닉네임</div>
      <input
        type="text"
        placeholder="닉네임을 지어주세요"
        value={nickName}
        onChange={inputNickName}
      />
    </NickNameWrapper>
  );
};

export default UserNickName;
