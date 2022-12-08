import React from 'react';
import { userNameAtom } from '../../store/signUpAtom';
import { useAtom } from 'jotai';
import styled from 'styled-components';

const NameWrapper = styled.div`
  display: flex;
  font-size: 30px;
  margin-top: 20px;
  input {
    padding-left: 10px;
    margin-left: 10px;
    font-size: 30px;
  }
`;

const UserName = () => {
  const [name, setName] = useAtom(userNameAtom);

  const inputNickName = (e) => {
    setName(e.target.value);
  };

  return (
    <NameWrapper>
      <div>닉네임 : </div>
      <input
        type="text"
        placeholder="닉네임을 지어주세요"
        value={name}
        onChange={inputNickName}
      />
    </NameWrapper>
  );
};

export default UserName;
