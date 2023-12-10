import { SpectrumData } from "../types/SpectrumData";
import { transformKeysToPascalCase } from "../utils/parseDataStatus";

const STATUS_URL = process.env.REACT_APP_SPECTRUM_STATUS_URL;

export const fetchSpectrumStatus = async (): Promise<SpectrumData> => {
  let data: SpectrumData | null = null;

  if (STATUS_URL) {
    const response = await fetch(STATUS_URL);
    data = (await response.json()) as SpectrumData;
    data = transformKeysToPascalCase(data);
    console.log(data)
    const Timestamp = Date.now();
    const newData = { ...data, Timestamp };
    return newData;
  } else {
    throw new Error("Status URL not set.");
  }
};
