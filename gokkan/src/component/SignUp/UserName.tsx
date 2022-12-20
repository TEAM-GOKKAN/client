import React from 'react';
import { userNameAtom } from '../../store/signUpAtom';
import { useAtom } from 'jotai';
import styled from 'styled-components';

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
  input {
    width: 100%;
    background-color: #f4f2f1;
    padding: 10px 12px;
    margin-top: 10px;
    border: none;
  }
`;

const UserName = () => {
  const [name, setName] = useAtom(userNameAtom);

  const inputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <NameWrapper>
      <label htmlFor="name">이름</label>
      <input
        type="text"
        id="name"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={inputName}
      />
    </NameWrapper>
  );
};

export default UserName;
