import { atom } from 'recoil';
import { SpectrumData } from '@base/types/spectrumData'

export const spectrumDataState = atom<SpectrumData[]>({
    key: 'spectrumDataState',
    default: [], 
  });
  
  