const ACTON_URL = process.env.REACT_APP_SPECTRUM_ACT_URL;

export const actOnSpectrum = async (): Promise<boolean> => {
  if (ACTON_URL) {
    try {
      const response = await fetch(ACTON_URL);
      return response.status === 200;
    } catch (error) {
      console.error(error);
      return false;
    }
  } return false
};
