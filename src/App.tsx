import React from 'react';
import './App.scss';
import WebSocketController from './components/Button/WebSocketController/WebSocketController';
import StatusController from './components/Button/StatusController/StatusController';

function App() {
  return (
    <div >
     <StatusController/>
     <WebSocketController/>
    </div>
  );
}

export default App;
