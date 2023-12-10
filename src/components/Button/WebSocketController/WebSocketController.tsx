import React from 'react';
import { useRecoilState } from 'recoil';
import { websocketState } from '../../../store/spectrumWebSocket.state';
import { spectrumDataState } from "../../../store/spectrumData.state";
import { connectWebSocket, disconnetWebSocket } from '../../../api/spectrumWebSocket';
import { SpectrumData } from '../../../types/SpectrumData';


const WebSocketController: React.FC = () => {
    const [isWebSocketActive, setIsWebSocketActive] = useRecoilState(websocketState);
    const [spectrumData, setSpectrumData] = useRecoilState(spectrumDataState);

    const handleWebSocket = () => {
        if (isWebSocketActive) {
          disconnetWebSocket(
            () => setIsWebSocketActive(false),

          );
        } else {
          connectWebSocket(() => setIsWebSocketActive(true),
          (newData: SpectrumData) => setSpectrumData(currentData => [...currentData, newData])
          );
        }
      };
  
    return (
      <div>
      <button onClick={handleWebSocket}>
          {isWebSocketActive ? 'Stop WebSocket' : 'Start WebSocket'}
      </button>
      <div>
          <h3>WebSocket Data:</h3>
          <ul>
              {spectrumData.map((data, index) => (
                  <li key={index}>
                      Velocity: {data.Velocity}, Altitude: {data.Altitude}, Timestamp: {data.Timestamp}
                  </li>
              ))}
          </ul>
      </div>
  </div>
    );
  };
  
  export default WebSocketController