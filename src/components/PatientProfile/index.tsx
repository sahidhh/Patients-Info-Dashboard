import './PatientProfile.css'

export const PatientProfile = () => {
  return (
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
        <img src="src\assets\Layer 2@2x.png" alt="" />
        <h3>Jessica Taylor</h3>
      </div>
      <div className="content-patient-profile-bio">
        <div className="content-patient-profile-bio-item">
          <img src="src\assets\BirthIcon@2x.png" alt="" />
          <div>
            <p className="content-patient-profile-bio-item-title">
              Date of Birth
            </p>
            <p className="content-patient-profile-bio-item-value">
              August 23, 1986
            </p>
          </div>
        </div>
        <div className="content-patient-profile-bio-item">
          <img src="src\assets\FemaleIcon@2x.png" alt="" />
          <div>
            <p className="content-patient-profile-bio-item-title">
              Date of Birth
            </p>
            <p className="content-patient-profile-bio-item-value">
              August 23, 1986
            </p>
          </div>
        </div>
        <div className="content-patient-profile-bio-item">
          <img src="src\assets\PhoneIcon.svg" alt="" />
          <div>
            <p className="content-patient-profile-bio-item-title">
              Date of Birth
            </p>
            <p className="content-patient-profile-bio-item-value">
              August 23, 1986
            </p>
          </div>
        </div>
        <div className="content-patient-profile-bio-item">
          <img src="src\assets\PhoneIcon.svg" alt="" />
          <div>
            <p className="content-patient-profile-bio-item-title">
              Date of Birth
            </p>
            <p className="content-patient-profile-bio-item-value">
              August 23, 1986
            </p>
          </div>
        </div>
        <div className="content-patient-profile-bio-item">
          <img src="src\assets\InsuranceIcon.svg" alt="" />
          <div>
            <p className="content-patient-profile-bio-item-title">
              Date of Birth
            </p>
            <p className="content-patient-profile-bio-item-value">
              August 23, 1986
            </p>
          </div>
        </div>
      </div>
      <div className="content-patient-more-info">
        <button>Show All Information</button>
      </div>
    </div>
  );
};
