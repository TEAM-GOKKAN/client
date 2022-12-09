import React, { useState } from 'react';
import { userAddressAtom, userAddressDetailAtom } from '../../store/signUpAtom';
import { useAtom } from 'jotai';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';

const AddressWrapper = styled.div`
  display: flex;
  font-size: 18px;
  margin-top: 3vh;
  .address {
    margin-left: calc(2vw + 18px);
    padding-left: 2vw;
    width: 50vw;
    font-size: 18px;
    border: 1px solid black;
  }
  button {
    margin-left: 2vw;
  }
`;

const AddressDetailWrapper = styled.div`
  input {
    margin-left: calc(54px + 2vw);
    width: 72vw;
    font-size: 18px;
    margin-top: 1vh;
    border: 1px solid black;
    padding-left: 2vw;
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

const UserAddress = () => {
  const [address, setAddress] = useAtom(userAddressAtom);
  const [addressDetail, setAddressDetail] = useAtom(userAddressDetailAtom);
  const [showAddress, setShowAddress] = useState(false);

  const handleAddressButtonClick = () => {
    setShowAddress(true);
  };

  const onCompletePost = (data: any) => {
    setAddress(String(data.address));
    setShowAddress(false);
  };

  const inputAddressDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(e.target.value);
  };

  return (
    <>
      <AddressWrapper>
        <div>주소</div>
        <div className="address">{address}</div>
        <button onClick={handleAddressButtonClick}>주소찾기</button>
      </AddressWrapper>
      <AddressDetailWrapper>
        <input
          type="text"
          placeholder="상세 주소를 입력해주세요"
          value={addressDetail}
          onChange={inputAddressDetail}
        />
      </AddressDetailWrapper>
      {showAddress && (
        <AddressFindWrapper>
          <div className="daum-address">
            <DaumPostcode onComplete={onCompletePost} />
          </div>
        </AddressFindWrapper>
      )}
    </>
  );
};

export default UserAddress;
