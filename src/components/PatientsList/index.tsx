import { Avatar } from "antd";
import "./patientsSection.css";
import { usePatientsRecords } from "../../contexts/PatientsContext";
import { useEffect, useState } from "react";

export const PatientsList = () => {
  const [patient, setPatient] = useState("Jessica Taylor");
  const { records, setCurrentPatient } = usePatientsRecords();

  useEffect(() => {
    setCurrentPatient(patient);
  }, [patient]);

  const patientsListData = records.map(
    ({ name, gender, age, profile_picture }) => {
      return (
        <div
          className="content-patients-list-item"
          style={patient === name ? { backgroundColor: "#d8fcf7" } : {}}
          onClick={() => setPatient(name)}
        >
          <div className="content-patients-list-item-data">
            <div>
              <Avatar size={"large"} src={profile_picture} />
            </div>
            <div className="content-patient-details">
              <p className="content-patient-name">{name}</p>
              <p className="content-patient-basic-info">
                {`${gender}, ${age}`}
              </p>
            </div>
          </div>
          <div className="content-patients-list-item-options">
            <img
              src="src\assets\more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
              alt=""
            />
          </div>
        </div>
      );
    }
  );

  return (
    <div
      className="content-patients-container"
      style={{
        minHeight: 380,
        background: "#ffffff",
        borderRadius: "8px",
        width: "25%",
        padding: "5px",
      }}
    >
      <div className="content-patients-header">
        <h3>Patients</h3>
        <div>
          <img src="src\assets\search_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
        </div>
      </div>
      <div className="content-patients-list">{patientsListData}</div>
    </div>
  );
};
