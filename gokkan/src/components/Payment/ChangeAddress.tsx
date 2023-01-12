import { useAtom } from 'jotai';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import {
  newAddressAtom,
  newAddressDetailAtom,
  newNameAtom,
  newPhoneNumberAtom,
} from '../../store/paymentAtom';
import DaumPostcode from 'react-daum-postcode';

interface IProps {
  onComplete: () => void;
}

export default function ChangeAddress({ onComplete }: IProps) {
  const [newName, setNewName] = useAtom(newNameAtom);
  const [newPhoneNumber, setNewPhoneNumber] = useAtom(newPhoneNumberAtom);
  const [newAddress, setNewAddress] = useAtom(newAddressAtom);
  const [newAddressDetail, setNewAddressDetail] = useAtom(newAddressDetailAtom);
  const [isSearchMode, setIsSearchMode] = useState(false);

  const handleSearchButtonClick = () => {
    setIsSearchMode(true);
  };

  const handleSearchComplete = (data: any) => {
    setNewAddress(String(data.address));
    setIsSearchMode(false);
  };

  const handleAddressDetailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewAddressDetail(e.target.value);
  };

  const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handlePhoneNumberInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPhoneNumber(e.target.value);
  };

  return (
    <Container>
      <ItemWrapper>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          placeholder="이름을 입력해주세요"
          value={newName}
          onChange={handleNameInput}
        />
      </ItemWrapper>
      <ItemWrapper>
        <label htmlFor="phoneNumber">휴대폰</label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="010-xxxx-xxxx"
          value={newPhoneNumber}
          onChange={handlePhoneNumberInput}
        />
      </ItemWrapper>
      <AddressWrapper>
        <label htmlFor="address">주소</label>
        <div className="address-find">
          <div className="address">{newAddress}</div>
          <button onClick={handleSearchButtonClick}>검색</button>
        </div>
        <input
          type="text"
          id="address"
          placeholder="상세 주소를 입력해주세요"
          value={newAddressDetail}
          onChange={handleAddressDetailInput}
        />
        {isSearchMode && (
          <AddressFindWrapper>
            <div className="daum-address">
              <DaumPostcode onComplete={handleSearchComplete} />
            </div>
          </AddressFindWrapper>
        )}
      </AddressWrapper>
      <CompleteButton type="button" onClick={onComplete}>
        완료
      </CompleteButton>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 24px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  & input {
    width: 100%;
    background-color: #f4f2f1;
    padding: 10px 12px;
    margin-top: 10px;
    border: none;
  }

  & label {
    font-weight: var(--weight-semi-bold);
  }
`;

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  .address-find {
    width: 100%;
    margin: 10px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;

    .address {
      width: 100%;
      height: 42px;
      background-color: var(--color-brown100);
      padding: 10px 12px;
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 400;
      font-size: var(--font-small);
      line-height: 22px;
      /* identical to box height */

      letter-spacing: -0.04em;
    }

    button {
      padding: 0 18px;
      height: 42px;
      background-color: var(--color-purple);
      color: var(--color-brown100);
      font-weight: var(--weight-semi-bold);
    }
  }

  input {
    border: none;
    padding: 10px 12px;
  }

  & label {
    font-weight: var(--weight-semi-bold);
  }
`;

const AddressFindWrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 10;
  background-color: white;
  display: flex;
  justify-content: center;

  .daum-address {
    margin-top: 5vh;
    width: 90%;
  }
`;

const CompleteButton = styled.button`
  padding: 6px 12px;
  font-size: 12px;
  color: var(--color-brown300);
  border: 1px solid var(--color-brown300);
  /* position: relative;
  top: -10px; */
  margin-bottom: 14px;
  width: 100%;
  height: 42px;
`;
