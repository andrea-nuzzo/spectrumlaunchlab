import { websocketState,  } from "../store/spectrumWebSocket.state";
import { spectrumDataState } from "../store/spectrumData.state";
import { SpectrumData } from "../types/SpectrumData";

let webSocket: WebSocket | null = null;

const WEBSOCKET_URL = process.env.REACT_APP_SPECTRUM_WEBSOCKET_URL;

export const connectWebSocket = (
  setWebSocketActive: (active: boolean) => void, 
  setspectrumDataState: (newData: SpectrumData) => void) => {

  if (webSocket) {
    console.warn("WebSocket already open.");
    return;
  }

  if (!webSocket && WEBSOCKET_URL) {
    webSocket = new WebSocket(WEBSOCKET_URL);

    webSocket.onopen = () => {
      console.log("WebSocket connection established");
      setWebSocketActive(true);
    };

    webSocket.onmessage = (event) => {
      const data = JSON.parse(event.data) as SpectrumData;
      const Timestamp = Date.now();
      const newData = { ...data, Timestamp };
      setspectrumDataState(newData);
      console.log("WebSocket Data:", newData);

    };

    webSocket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    webSocket.onclose = () => {
      console.log("WebSocket connection closed");
      webSocket = null;
    };
  } else {
    console.warn("WebSocket URL not set.");
  }
};

export const disconnetWebSocket = (setWebSocketActive: (active: boolean) => void,) => {
  if (webSocket && webSocket.readyState === WebSocket.OPEN) {
    webSocket.close();
    console.log("WebSocket connection stopped");
    setWebSocketActive(false);
    webSocket = null;
  } else {
    console.warn("WebSocket is not open or already closed.");
  }
};
