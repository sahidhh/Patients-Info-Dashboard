import { usePatientsRecords } from "../../contexts/PatientsContext";
import LabResults from "./LabResults";
import "./PatientProfile.css";

export const PatientProfile = () => {
  const { getPatientBio } = usePatientsRecords();
  const patientBio = getPatientBio();

  return (
    <div className="patient-profile-section">
      <div
        className="content-patient-profile-container"
        style={{
          padding: 24,
          minHeight: 380,
          background: "#ffffff",
          borderRadius: "8px",
        }}
      >
        <div className="content-patient-profile-top">
          <img src={patientBio?.profile_picture} alt="" />
          <h3>{patientBio?.name}</h3>
        </div>
        <div className="content-patient-profile-bio">
          <div className="content-patient-profile-bio-item">
            <img src="src\assets\BirthIcon@2x.png" alt="" />
            <div>
              <p className="content-patient-profile-bio-item-title">
                Date of Birth
              </p>
              <p className="content-patient-profile-bio-item-value">
                {patientBio?.date_of_birth}
              </p>
            </div>
          </div>
          <div className="content-patient-profile-bio-item">
            <img
              src={
                patientBio?.gender === "Female"
                  ? "src/assets/FemaleIcon@2x.png"
                  : "src/assets/MaleIcon.svg"
              }
              alt=""
            />
            <div>
              <p className="content-patient-profile-bio-item-title">Gender</p>
              <p className="content-patient-profile-bio-item-value">
                {patientBio?.gender}
              </p>
            </div>
          </div>
          <div className="content-patient-profile-bio-item">
            <img src="src\assets\PhoneIcon.svg" alt="" />
            <div>
              <p className="content-patient-profile-bio-item-title">
                Contact Info.
              </p>
              <p className="content-patient-profile-bio-item-value">
                {patientBio?.phone_number}
              </p>
            </div>
          </div>
          <div className="content-patient-profile-bio-item">
            <img src="src\assets\PhoneIcon.svg" alt="" />
            <div>
              <p className="content-patient-profile-bio-item-title">
                Emergency Contacts
              </p>
              <p className="content-patient-profile-bio-item-value">
                {patientBio?.emergency_contact}
              </p>
            </div>
          </div>
          <div className="content-patient-profile-bio-item">
            <img src="src\assets\InsuranceIcon.svg" alt="" />
            <div>
              <p className="content-patient-profile-bio-item-title">
                Insurance Provider
              </p>
              <p className="content-patient-profile-bio-item-value">
                {patientBio?.insurance_type}
              </p>
            </div>
          </div>
        </div>
        <div className="content-patient-more-info">
          <button>Show All Information</button>
        </div>
      </div>
      <LabResults />
    </div>
  );
};
