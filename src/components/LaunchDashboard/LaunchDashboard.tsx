import { useRecoilValue } from "recoil";
import { useState } from "react";
import LineChart2d from "@components/LineChart2d/LineChart2d";
import Flyout from "@components/Flyout/Flyout";
import { spectrumDataState } from "@store/spectrumData.state";
import "./LaunchDashboard.style.scss";

const LauchDashboard = () => {
  const spectrumData = useRecoilValue(spectrumDataState);
  const dataIsActionRequired = spectrumData.filter(
    (item) => item.IsActionRequired === true
  );

  const [flyoutState, setFlyoutState] = useState("closed");

  const toggleFlyout = (state: string) => {
    setFlyoutState(state);
  };

  return (
    <div className="container-dashboard">
      {dataIsActionRequired.length > 0 && (
        <Flyout
          data={dataIsActionRequired}
          flyoutState={flyoutState}
          setFlyoutState={setFlyoutState}
        />
      )}
      <div
        className={`container-charts ${flyoutState === "open" ? "active" : ""}`}
      >
        <LineChart2d dataKey="Velocity" dataState={spectrumDataState} />
        <LineChart2d dataKey="Temperature" dataState={spectrumDataState} />
        <LineChart2d dataKey="Altitude" dataState={spectrumDataState} />
        <div></div>
      </div>
    </div>
  );
};

export default LauchDashboard;
