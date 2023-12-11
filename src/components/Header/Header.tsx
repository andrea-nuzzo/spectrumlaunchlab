import "./Header.style.scss";
import WebSocketController from "@components/Button/WebSocketController/WebSocketController";
import StatusController from "@components/Button/StatusController/StatusController";
import { ReactComponent as Logo } from '../../assets/images/logo.svg';


const Header = () => {
  return (
    <div className="header">
      <div className="container-header">
        <div className="header-left">
          <Logo className="logo" />
          <div className="header-title">Rocket Lab Launch</div>
        </div>

        <div className="header-right">
          <div className="websocket">
           <WebSocketController />
          </div>
          <div className="status">
            <StatusController />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
