import { atom } from 'recoil';
import { SpectrumData } from '../types/SpectrumData';

export const spectrumDataState = atom<SpectrumData[]>({
    key: 'spectrumDataState',
    default: [], 
  });
  
  