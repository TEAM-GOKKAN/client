import React from 'react';
import { userAddressAtom } from '../../store/signUpAtom';
import { useAtom } from 'jotai';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';

const AddressWrapper = styled.div`
  margin-top: 20px;
  font-size: 30px;
  width: 80vw;
`;

const UserAddress = () => {
  const [address, setAddress] = useAtom(userAddressAtom);

  return (
    <AddressWrapper>
      <div>주소</div>
      <DaumPostcode />
    </AddressWrapper>
  );
};

export default UserAddress;
