import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { spectrumDataState } from "@store/spectrumData.state";
import { fetchSpectrumStatus } from '@api/spectrumStatus';
import { FaSync } from 'react-icons/fa';
import './StatusController.style.scss';

const StatusController: React.FC = () => {
  const setSpectrumData = useSetRecoilState(spectrumDataState);
  const [isRotation, setsetIsRotation] = useState(false);

  const handleStatus = async () => {
    setsetIsRotation(true);
    try {
      const updatedStatus = await fetchSpectrumStatus();
      setSpectrumData(currentData => [...currentData, updatedStatus]);
      console.log("Status Updated");
    } catch (error) {
      console.error("Errore durante l'aggiornamento dello stato:", error);
      setsetIsRotation(false);
    }
    setsetIsRotation(false);
  };

  return (
    <div>
      <button onClick={handleStatus} className="status-controller">
      <FaSync className={isRotation ? 'rotating' : ''} /> Update Status
      </button>
    </div>
  );
};

export default StatusController;