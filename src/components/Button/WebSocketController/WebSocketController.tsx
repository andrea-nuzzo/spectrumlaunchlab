import { useState } from "react";
import { useRecoilState } from "recoil";
import { websocketState } from "@store/spectrumWebSocket.state";
import { spectrumDataState } from "@store/spectrumData.state";
import {
  connectWebSocket,
  disconnetWebSocket,
} from "@api/spectrumWebSocket";
import { SpectrumData } from "@base/types/spectrumData";
import { FaPlay, FaStop } from "react-icons/fa";
import "./WebSocketController.style.scss";

const WebSocketController: React.FC = () => {
  const [isWebSocketActive, setIsWebSocketActive] =
    useRecoilState(websocketState);
  const [spectrumData, setSpectrumData] = useRecoilState(spectrumDataState);
  const [websocketStatus, setWebsocketStatus] = useState<string>("");

  const handleWebSocketStatus = (errorMessage: string) => {
    setWebsocketStatus(errorMessage);
    setIsWebSocketActive(false);
    setTimeout(() => {
      setWebsocketStatus("");
    }, 3000);
  };

  const handleWebSocket = () => {
    if (isWebSocketActive) {
      disconnetWebSocket(() => setIsWebSocketActive(false));
      setWebsocketStatus("");
    } else {
      connectWebSocket(
        () => setIsWebSocketActive(true),
        (newData: SpectrumData) =>
          setSpectrumData((currentData) => [...currentData, newData]),
        handleWebSocketStatus
      );
    }
  };

  return (
    <div className="container-ws">
      {websocketStatus && (
        <div className="websocket-error-badge fade-out">{websocketStatus}</div>
      )}
      <button
        onClick={handleWebSocket}
        className={`web-socker-controller ${isWebSocketActive ? "stop" : ""}`}
      >
        {isWebSocketActive ? (
          <>
            <FaStop /> Stop WS
          </>
        ) : (
          <>
            <FaPlay /> Play WS
          </>
        )}
      </button>
    </div>
  );
};

export default WebSocketController;
