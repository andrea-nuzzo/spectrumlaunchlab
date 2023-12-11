import { atom } from 'recoil';
import type { SpectrumData } from '@base/types/spectrumData'

export const spectrumDataState = atom<SpectrumData[]>({
    key: 'spectrumDataState',
    default: [], 
  });
  
  