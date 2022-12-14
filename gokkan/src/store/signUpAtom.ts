import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const userNameAtom = atomWithStorage('name', '');
const userNickNameAtom = atomWithStorage('nickname', '');
const userNickNameCheckAtom = atomWithStorage('nicknamecheck', '');
const userAddressAtom = atomWithStorage('address', '');
const userAddressDetailAtom = atomWithStorage('addressdetail', '');
const userPhoneAtom = atomWithStorage('phone', '');
const userProfileImageUrlAtom = atomWithStorage<string>(
  'imgurl',
  '/src/asset/userDefaultImage.png'
);
const userProfileImageFileAtom = atomWithStorage<string | File | unknown>(
  'imgfile',
  ''
);

export {
  userNameAtom,
  userNickNameAtom,
  userNickNameCheckAtom,
  userAddressAtom,
  userAddressDetailAtom,
  userPhoneAtom,
  userProfileImageUrlAtom,
  userProfileImageFileAtom,
};
