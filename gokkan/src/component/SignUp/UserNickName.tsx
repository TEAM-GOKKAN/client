import React from 'react';
import {
  userNickNameAtom,
  userNickNameCheckAtom,
} from '../../store/signUpAtom';
import { useAtom } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';
import axios from 'axios';
import styled from 'styled-components';

const NickNameWrapper = styled.div`
  position: relative;
  display: flex;
  font-size: 18px;
  margin-top: 3vh;
  input {
    margin-left: 2vw;
    padding-left: 2vw;
    width: 70vw;
    font-size: 18px;
    &[data-duplicate=''] {
      border: 1px solid black;
    }
    &[data-duplicate='false'] {
      border: 2px solid red;
    }
    &[data-duplicate='true'] {
      border: 2px solid green;
    }
    &[data-duplicate='checking'] {
      border: 2px solid orange;
    }
  }
  .available {
    font-size: 12px;
    color: green;
    position: absolute;
    top: 3vh;
    left: 15vw;
  }
  .unavailable {
    font-size: 12px;
    color: red;
    position: absolute;
    top: 3vh;
    left: 15vw;
  }
  .checking {
    font-size: 12px;
    color: orange;
    position: absolute;
    top: 3vh;
    left: 15vw;
  }
`;

const UserNickName = () => {
  const [nickName, setNickName] = useAtom(userNickNameAtom);
  const [isDuplicate, setIsDuplicate] = useAtom(userNickNameCheckAtom);

  const inputNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const checkDuplicate = () => {
    // const [checkNickNameAtom] = atomsWithQuery((get) => ({
    //   queryKey: ['users', get(userNickNameAtom)],
    //   queryFn: async ({ queryKey: [, id] }) => {
    //     const res = await axios(`/${id}`);
    //     return res.data;
    //   },
    // }));
  };

  return (
    <NickNameWrapper>
      <div>닉네임</div>
      <input
        type="text"
        placeholder="닉네임을 지어주세요"
        value={nickName}
        onChange={inputNickName}
        onBlur={checkDuplicate}
        data-duplicate={isDuplicate}
      />
      {isDuplicate === 'true' && (
        <div className="available">* 사용 가능한 닉네임입니다.</div>
      )}
      {isDuplicate === 'false' && (
        <div className="unavailable">* 중복된 닉네임입니다.</div>
      )}
      {isDuplicate === 'checking' && (
        <div className="checking">* 닉네임 중복 확인 중입니다.</div>
      )}
    </NickNameWrapper>
  );
};

export default UserNickName;
