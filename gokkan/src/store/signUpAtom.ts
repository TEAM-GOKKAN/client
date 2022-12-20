import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const userNameAtom = atomWithStorage('name', '');
const userNickNameAtom = atomWithStorage('nickname', '');
const userNickNameCheckAtom = atomWithStorage('nicknamecheck', '');
const userAddressAtom = atomWithStorage('address', '');
const userAddressDetailAtom = atomWithStorage('addressdetail', '');
const userPhoneAtom = atomWithStorage('phone', '');
const userPhoneCheckAtom = atomWithStorage('phoneCheck', '');
const userProfileImageUrlAtom = atomWithStorage<string>(
  'imgurl',
  '/src/asset/userDefaultImage.png'
);
const userProfileImageFileAtom = atomWithStorage<string | File>('imgfile', '');
const clearAtom = atom(null, (get, set, update) => {
  set(userNameAtom, '');
  set(userNickNameAtom, '');
  set(userNickNameCheckAtom, '');
  set(userAddressAtom, '');
  set(userAddressDetailAtom, '');
  set(userPhoneAtom, '');
  set(userPhoneCheckAtom, '');
  set(userProfileImageUrlAtom, '/src/asset/userDefaultImage.png');
  set(userProfileImageFileAtom, '');
});
const setInitialUserInfo = atom(null, (get, set, update: InitialUserInfo) => {
  set(userNameAtom, update.name);
  set(userProfileImageUrlAtom, update.profileImageUrl);
});
const userInfoAtom = atom((get) => {
  const name = get(userNameAtom);
  // const nickname = get(userNickNameAtom);
  const adress = get(userAddressAtom);
  // const adressDetail = get(userAddressDetailAtom);
  const phoneNumber = get(userPhoneAtom);
  return {
    name,
    email: '',
    phoneNumber,
    profileImageUrl: '',
    adress,
    cardNumber: '',
    // nickname,
    // adressDetail,
  };
});

type InitialUserInfo = {
  name: string;
  profileImageUrl: string;
};

export {
  userNameAtom,
  userNickNameAtom,
  userNickNameCheckAtom,
  userAddressAtom,
  userAddressDetailAtom,
  userPhoneAtom,
  userPhoneCheckAtom,
  userProfileImageUrlAtom,
  userProfileImageFileAtom,
  clearAtom,
  setInitialUserInfo,
  userInfoAtom,
};
