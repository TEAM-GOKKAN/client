import { atom } from 'jotai';

const userNameAtom = atom('');
const userAddressAtom = atom('');
const userPhoneAtom = atom('');
const userProfileImageUrlAtom = atom('');
const userProfileImageFileAtom = atom({});

export {
  userNameAtom,
  userAddressAtom,
  userPhoneAtom,
  userProfileImageUrlAtom,
  userProfileImageFileAtom,
};
