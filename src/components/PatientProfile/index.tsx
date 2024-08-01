import { usePatientsRecords } from "../../contexts/PatientsContext";
import LabResults from "./LabResults";
import "./PatientProfile.css";

export const PatientProfile = () => {
  const { getPatientBio } = usePatientsRecords();
  const patientBio = getPatientBio();

  return (
    <div className="content-patient-profile-section">
      <div className="patient-profile-container">
        <div className="patient-profile-top">
          <img src={patientBio?.profile_picture} alt="" />
          <h2>{patientBio?.name}</h2>
        </div>
        <div className="patient-profile-bio">
          <div className="patient-profile-bio-item">
            <img src=".\src\assets\BirthIcon@2x.png" alt="" />
            <div>
              <p className="patient-profile-bio-item-title">Date of Birth</p>
              <p className="patient-profile-bio-item-value">
                {patientBio?.date_of_birth}
              </p>
            </div>
          </div>
          <div className="patient-profile-bio-item">
            <img
              src={
                patientBio?.gender === "Female"
                  ? "./src/assets/FemaleIcon@2x.png"
                  : "./src/assets/MaleIcon.svg"
              }
              alt=""
            />
            <div>
              <p className="patient-profile-bio-item-title">Gender</p>
              <p className="patient-profile-bio-item-value">
                {patientBio?.gender}
              </p>
            </div>
          </div>
          <div className="patient-profile-bio-item">
            <img src=".\src\assets\PhoneIcon.svg" alt="" />
            <div>
              <p className="patient-profile-bio-item-title">Contact Info.</p>
              <p className="patient-profile-bio-item-value">
                {patientBio?.phone_number}
              </p>
            </div>
          </div>
          <div className="patient-profile-bio-item">
            <img src=".\src\assets\PhoneIcon.svg" alt="" />
            <div>
              <p className="patient-profile-bio-item-title">
                Emergency Contacts
              </p>
              <p className="patient-profile-bio-item-value">
                {patientBio?.emergency_contact}
              </p>
            </div>
          </div>
          <div className="patient-profile-bio-item">
            <img src=".\src\assets\InsuranceIcon.svg" alt="" />
            <div>
              <p className="patient-profile-bio-item-title">
                Insurance Provider
              </p>
              <p className="patient-profile-bio-item-value">
                {patientBio?.insurance_type}
              </p>
            </div>
          </div>
        </div>
        <div className="patient-more-info">
          <button>Show All Information</button>
        </div>
      </div>
      <LabResults />
    </div>
  );
};
