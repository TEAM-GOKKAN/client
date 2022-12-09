import React from 'react';
import { userNameAtom } from '../../store/signUpAtom';
import { useAtom } from 'jotai';
import styled from 'styled-components';

const NameWrapper = styled.div`
  display: flex;
  font-size: 18px;
  margin-top: 3vh;
  width: 100%;
  input {
    margin-left: calc(2vw + 18px);
    padding-left: 2vw;
    width: 70vw;
    font-size: 18px;
  }
`;

const UserName = () => {
  const [name, setName] = useAtom(userNameAtom);

  const inputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <NameWrapper>
      <div>이름</div>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={inputName}
      />
    </NameWrapper>
  );
};

export default UserName;
