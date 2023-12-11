import { atom } from 'recoil';

export const isAscendingArrayState = atom<boolean[]>({
  key: 'isAscendingArrayState',
  default: [],
});