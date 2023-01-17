import React, { useState, useEffect } from 'react';
import {
  userNickNameAtom,
  userNickNameCheckAtom,
} from '../../store/signUpAtom';
import { useAtom } from 'jotai';
import axios from 'axios';
import styled from 'styled-components';

const NickNameWrapper = styled.div`
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
  .available {
    font-size: 12px;
    color: var(--color-purple);
    margin-top: 4px;
  }
  .unavailable {
    font-size: 12px;
    color: --color-orange;
  }
`;

const UserNickName = () => {
  const [nickName, setNickName] = useAtom(userNickNameAtom);
  const [nickNameCheck, setNickNameCheck] = useAtom(userNickNameCheckAtom);

  const inputNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const checkDuplicate = () => {
    if (nickName === '') return;
    const baseUrl = 'http://3.38.59.40:8080/api/v1/users/nickName/duplicate';
    axios
      .get(baseUrl, { params: { nickName } })
      .then(({ data }) => {
        if (!data) {
          setNickNameCheck('true');
        } else {
          setNickNameCheck('false');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (nickName === '') {
      setNickNameCheck('');
    }
  }, [nickName]);

  return (
    <NickNameWrapper>
      <div>닉네임</div>
      <input
        type="text"
        placeholder="닉네임을 지어주세요"
        value={nickName}
        onChange={inputNickName}
        onBlur={checkDuplicate}
        data-duplicate={nickNameCheck}
      />
      {nickNameCheck === 'true' && (
        <div className="available">사용 가능한 닉네임입니다.</div>
      )}
      {nickNameCheck === 'false' && (
        <div className="unavailable">중복된 닉네임입니다.</div>
      )}
    </NickNameWrapper>
  );
};

export default UserNickName;
