import "./PatientDiagnosis.css";
import { BPChart } from "./BPChart";
import { Select } from "antd";

export const PatientDiagnosis = () => {
  return (
    <div className="content-middle-section">
      <div className="content-diagnosis-container">
        <div
          className="diagnosis-history"
          style={{
            padding: 24,
            minHeight: 380,
            background: "#fffff",
            borderRadius: "8px",
          }}
        >
          <h2>Diagnosis History</h2>
          <div className="blood-pressure-chart">
            <div className="blood-pressure-chart-left">
              <div className="blood-pressure-chart-header">
                <h4>Blood Pressure</h4>
                <Select
                  defaultValue="Last 6 months"
                  options={[
                    {
                      value: "Last 6 months",
                      label: "Last 6 months",
                    },
                  ]}
                />
              </div>
              <BPChart/>
            </div>
            <div className="blood-pressure-chart-right">
              <div className="systolic blood-pressure-chart-right-item">
                <div className="blood-pressure-chart-legend">
                  <div className="blood-pressure-chart-legend-circle systolic-legend-circle"></div>
                  <h5>Systolic</h5>
                </div>
                <h4 className="blood-pressure-chart-rate">160</h4>
                <p>Higher than average</p>
              </div>
              <div className="diastolic blood-pressure-chart-right-item">
                <div className="blood-pressure-chart-legend">
                  <div className="blood-pressure-chart-legend-circle diastolic-legend-circle"></div>
                  <h5>Diastolic</h5>
                </div>
                <h4 className="blood-pressure-chart-rate">78</h4>
                <p>Lower than average</p>
              </div>
            </div>
          </div>
          <div className="diagnosis-history-info">
            <div className="diagnosis-info diagnosis-respiratory-rate">
              <div className="diagnosis-info-icon">
                <img src="src\assets\respiratory rate.svg" alt="" />
              </div>
              <div className="diagnosis-info-detail">
                <p>Respiratory Rate</p>
                <h2>20 bpm</h2>
              </div>
              <div className="diagnosis-info-condition">
                <p>Normal</p>
              </div>
            </div>
            <div className="diagnosis-info diagnosis-temperature">
              <div className="diagnosis-info-icon">
                <img src="src\assets\temperature.svg" alt="" />
              </div>
              <div className="diagnosis-info-detail">
                <p>Temperature</p>
                <h2>98.6°F</h2>
              </div>
              <div className="diagnosis-info-condition">
                <p>Normal</p>
              </div>
            </div>
            <div className="diagnosis-info diagnosis-heart-rate">
              <div className="diagnosis-info-icon">
                <img src="src\assets\HeartBPM.svg" alt="" />
              </div>
              <div className="diagnosis-info-detail">
                <p>Heart Rate</p>
                <h2>96 bpm</h2>
              </div>
              <div className="diagnosis-info-condition">
                <p>Lower than average</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="diagnosis-list"
          style={{
            padding: 24,
            minHeight: 380,
            background: "#fffff",
            borderRadius: "8px",
          }}
        >
          
        </div>
      </div>
    </div>
  );
};
