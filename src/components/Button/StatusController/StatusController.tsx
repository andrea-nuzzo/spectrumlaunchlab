import React from 'react';
import { useSetRecoilState } from 'recoil';
import { spectrumDataState } from "../../../store/spectrumData.state";
import { fetchSpectrumStatus } from '../../../api/spectrumStatus';

const StatusController: React.FC = () => {
  const setSpectrumData = useSetRecoilState(spectrumDataState);

  const handleStatus = async () => {
    try {
      const updatedStatus = await fetchSpectrumStatus();
      console.log(updatedStatus)
      setSpectrumData(currentData => [...currentData, updatedStatus]);
      console.log("Status Updated");
    } catch (error) {
      console.error("Errore durante l'aggiornamento dello stato:", error);
    }
  };

  return (
    <div>
      <button onClick={handleStatus}>Update Status</button>
    </div>
  );
};

export default StatusController;