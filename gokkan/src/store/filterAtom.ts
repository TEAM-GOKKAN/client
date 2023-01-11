import { atom } from 'jotai';

const sortFilterAtom = atom('');
const styleFilterAtom = atom<string[]>([]);
const minPriceFilterAtom = atom('');
const maxPriceFilterAtom = atom('');
const resetFilterAtom = atom(null, (get, set, data) => {
  set(sortFilterAtom, '');
  set(styleFilterAtom, []);
  set(minPriceFilterAtom, '');
  set(maxPriceFilterAtom, '');
});

export {
  sortFilterAtom,
  styleFilterAtom,
  minPriceFilterAtom,
  maxPriceFilterAtom,
  resetFilterAtom,
};
