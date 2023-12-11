import { RecoilState } from "recoil";
import type { SpectrumData } from "./spectrumData";

export type LineChartProps = {
    dataState: RecoilState<SpectrumData[]>;
    dataKey: keyof SpectrumData;
}