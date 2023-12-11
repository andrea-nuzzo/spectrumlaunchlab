import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Line, Bar } from "react-chartjs-2";
import { LineChartProps } from "@base/types/lineChartProps";
import { Chart, registerables } from "chart.js";
import { getColorForTemperature } from "@utils/getColotForTemperature";
import { isAscendingArrayState } from "@store/isAscendingArray.state";
import { useSetRecoilState } from "recoil";
import "./LineChart2d.style.scss";
Chart.register(...registerables);

const arrowPlugin = {
  id: "arrowPlugin",
  afterDatasetsDraw: (chart: any) => {
    if (chart.data.datasets[0].label !== "Altitude") {
      return;
    }
    const ctx = chart.ctx;
    ctx.fillStyle = "red";
    ctx.beginPath();
    const isAscendingArray = chart.data.datasets[0].isAscendingArray;
    chart.data.datasets.forEach((dataset: any, datasetIndex: any) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      meta.data.forEach((point: any, index: any) => {
        const isAscending = isAscendingArray[index];
        const { x, y } = point.getCenterPoint();
        ctx.beginPath();

        ctx.fillStyle = isAscending ? "green" : "red";

        if (isAscending) {
          ctx.moveTo(x, y);
          ctx.lineTo(x - 5, y + 10);
          ctx.lineTo(x + 5, y + 10);
        } else {
          ctx.moveTo(x, y);
          ctx.lineTo(x - 5, y - 10);
          ctx.lineTo(x + 5, y - 10);
        }
        ctx.fill();
        ctx.closePath();
      });
    });
  },
};

const LineChart2d: React.FC<LineChartProps> = ({ dataState, dataKey }) => {
  const data = useRecoilValue(dataState);
  const setIsAscendingArray = useSetRecoilState(isAscendingArrayState);
  const isAscendingArray = useRecoilValue(isAscendingArrayState);

  useEffect(() => {
    if (dataKey === "Altitude") {
      const isAscendingArray = data.map((d) => d.IsAscending);
      setIsAscendingArray(isAscendingArray);
      Chart.register(arrowPlugin);
    } else {
      Chart.unregister(arrowPlugin);
    }
    return () => {
      Chart.unregister(arrowPlugin);
    };
  }, [data, dataKey, setIsAscendingArray]);

  const chartData = {
    labels: data
      .filter((d) => d.Timestamp != null)
      .map((d) => new Date(d.Timestamp!).toLocaleTimeString()),
    datasets: [
      {
        label: dataKey,
        data: data
          .filter((d) => d.Timestamp != null && d[dataKey] != null)
          .map((d) => d[dataKey] as number),
        isAscendingArray: isAscendingArray,
        fill: dataKey === "Altitude" ? "start" : false,
        backgroundColor:
          dataKey === "Temperature"
            ? data.map((d) => getColorForTemperature(d[dataKey]))
            : dataKey === "Altitude"
            ? "rgba(0, 127, 255, 0.2)"
            : "white",
        borderColor:
          dataKey === "Temperature"
            ? data.map((d) => getColorForTemperature(d[dataKey]))
            : "white",
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: "black",
        pointBorderColor: "#FF4F00",
        pointBorderWidth: 2,
        pointStyle: "circle",
        showLine: true,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          color: "grey",
        },
      },
      y: {
        grid: {
          color: "grey",
        },
      },
    },
    elements: {
      line: {
        fill: dataKey === "Altitude" ? "origin" : false,
        tension: 0.4,
      },
    },
    dataKey: dataKey,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="chart">
      <div className="chart-label">{dataKey}</div>
      {dataKey === "Temperature" ? (
        <Bar data={chartData} options={options} />
      ) : (
        <Line data={chartData} options={options} />
      )}
    </div>
  );
};

export default LineChart2d;
