import { atomWithStorage } from 'jotai/utils';

const accessTokenAtom = atomWithStorage('accessToken', '');
const refreshTokenAtom = atomWithStorage('refreshToken', '');

export { accessTokenAtom, refreshTokenAtom };
