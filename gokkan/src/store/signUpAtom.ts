import { atom } from 'jotai';

const userNameAtom = atom('');
const userNickNameAtom = atom('');
const userAddressAtom = atom('');
const userAddressDetailAtom = atom('');
const userPhoneAtom = atom('');
const userProfileImageUrlAtom = atom<string>('/src/asset/userDefaultImage.png');
const userProfileImageFileAtom = atom<string | File | unknown>('');

export {
  userNameAtom,
  userNickNameAtom,
  userAddressAtom,
  userAddressDetailAtom,
  userPhoneAtom,
  userProfileImageUrlAtom,
  userProfileImageFileAtom,
};
