import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales
);

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "#C26EB4",
      borderColor: "#C26EB4",
      data: [0, 10, 5, 2, 20, 30, 45],
      tension: 0.3,
    },
    {
      label: "My First dataset",
      backgroundColor: "#8C6FE6",
      borderColor: "#7E6CAB",
      data: [0, 30, 15, 42, 20, 10, 45],
      tension: 0.4,
    },
  ],
};
export const BPChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        // labels: {
        //   font: {
        //     size: 5,
        //   },
        // },
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
          color: "rgba(0,0,0,0)",
        },
        ticks: {
          font: { size: 10 },
        },
      },
    },
  };
  return (
    <div>
      <Line
        data={data}
        options={options}
        style={{ width: "100%", height:"auto" }}
      />
    </div>
  );
};
