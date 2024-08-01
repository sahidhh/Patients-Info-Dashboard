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
import { usePatientsRecords } from "../../contexts/PatientsContext";

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

export const BPChart = () => {
  const { getDiagnosisHistory } = usePatientsRecords();
  const patient = getDiagnosisHistory();

  const labels = patient.date.slice(0, 6);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Systolic",
        backgroundColor: "#C26EB4",
        borderColor: "#C26EB4",
        data: patient.blood_pressure_systolic.value.slice(0.6),
        tension: 0.4,
      },
      {
        label: "Diastolic",
        backgroundColor: "#8C6FE6",
        borderColor: "#7E6CAB",
        data: patient.blood_pressure_diastolic.value.slice(0.6),
        tension: 0.4,
      },
    ],
  };

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
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};
