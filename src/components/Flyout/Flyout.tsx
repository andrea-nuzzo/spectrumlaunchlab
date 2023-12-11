import { useEffect } from "react";
import type { SpectrumData } from "@base/types/spectrumData";
import { parseDate } from "@utils/parseDate";
import { actOnSpectrum } from "@api/spectrumActOn";
import { FaWrench, FaTimes, FaExclamationTriangle } from "react-icons/fa";
import "./Flyout.style.scss";
type FlyoutProps = {
  data: SpectrumData[];
  flyoutState: string;
  setFlyoutState: (state: string) => void;
};

const Flyout = ({ data, flyoutState, setFlyoutState }: FlyoutProps) => {

  const handleClose = () => {
    setFlyoutState("minimized");
  };

  const handleMinimizeToggle = () => {
    setFlyoutState(flyoutState === "minimized" ? "open" : "minimized");
  };

  useEffect(() => {
    if (data.length > 0 && flyoutState === "closed") {
      setFlyoutState("open");
    }
  }, [data, flyoutState]);
  return (
    <>
      {flyoutState === "open" && (
        <div className="flyout active">
          <div className="flyout_box-title">
            <h3>Critical status change detected</h3>
            <p>Action is required:</p>
            <button className="close_button" onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          <div className="flyout_content">
            {data.map((item) => (
              <div
                key={item.Timestamp}
                className="alert alert-danger alert-white rounded"
              >
                <div className="icon">
                  <FaTimes className="react-icon" />
                </div>
                <div className="message-content">
                  <strong>{item.Timestamp && parseDate(item.Timestamp)}</strong>
                  <div className="status-message">{item.StatusMessage}</div>
                </div>
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-hidden="true"
                  onClick={actOnSpectrum}
                >
                  <FaWrench />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {flyoutState === "minimized" && (
        <button className="minimized_button" onClick={handleMinimizeToggle}>
          <FaExclamationTriangle className="fa-chevron-down" />
          {data.length > 0 && (
            <div className="badge">
              {data.length} {/* Mostra il numero di azioni richieste */}
            </div>
          )}
        </button>
      )}
    </>
  );
};

export default Flyout;
