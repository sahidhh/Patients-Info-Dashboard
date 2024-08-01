import { usePatientsRecords } from "../../contexts/PatientsContext";
import "./LabResults.css";

const LabResults = () => {
  const { getLabResults } = usePatientsRecords();
  const data = getLabResults();

  if (!data) return;

  return (
    <div className="lab-results-container">
      <h2>Lab Results</h2>
      <div className="lab-results-list">
        {data?.map((result: string) => (
          <div className="lab-result-item">
            <p>{result}</p>
            <img
              src="\assets\download_FILL0_wght300_GRAD0_opsz24 (1).svg"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;
