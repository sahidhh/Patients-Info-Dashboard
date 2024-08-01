import "./PatientDiagnosis.css";
import { BPChart } from "./BPChart";
import { ConfigProvider, Select, Table } from "antd";
import { usePatientsRecords } from "../../contexts/PatientsContext";

export const PatientDiagnosis = () => {
  const { getDiagnosisHistory, getDiagnosticList } = usePatientsRecords();
  const {
    blood_pressure_systolic,
    blood_pressure_diastolic,
    heart_rate,
    respiratory_rate,
    temperature,
  } = getDiagnosisHistory();

  const data = [];

  getDiagnosticList()?.forEach(({ name, description, status }, index) => {
    data.push({
      key: index,
      diagnosis: name,
      description: description,
      status: status,
    });
  });

  const columns = [
    {
      title: "Problem/Diagnosis",
      dataIndex: "diagnosis",
      width: "27%",
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "45%",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  return (
    <div className="content-middle-section">
      <div className="content-diagnosis-container">
        <div className="diagnosis-history">
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
              <BPChart />
            </div>
            <div className="blood-pressure-chart-right">
              <div className="systolic blood-pressure-chart-right-item">
                <div className="blood-pressure-chart-legend">
                  <div className="blood-pressure-chart-legend-circle systolic-legend-circle"></div>
                  <h5>Systolic</h5>
                </div>
                <h4 className="blood-pressure-chart-rate">
                  {blood_pressure_systolic.value[0]}
                </h4>
                <p>{blood_pressure_systolic.levels[0]}</p>
              </div>
              <div className="diastolic blood-pressure-chart-right-item">
                <div className="blood-pressure-chart-legend">
                  <div className="blood-pressure-chart-legend-circle diastolic-legend-circle"></div>
                  <h5>Diastolic</h5>
                </div>
                <h4 className="blood-pressure-chart-rate">
                  {blood_pressure_diastolic.value[0]}
                </h4>
                <p>{blood_pressure_diastolic.levels[0]}</p>
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
                <h2>{respiratory_rate.value[0]} bpm</h2>
              </div>
              <div className="diagnosis-info-condition">
                <p>{respiratory_rate.levels[0]}</p>
              </div>
            </div>
            <div className="diagnosis-info diagnosis-temperature">
              <div className="diagnosis-info-icon">
                <img src="src\assets\temperature.svg" alt="" />
              </div>
              <div className="diagnosis-info-detail">
                <p>Temperature</p>
                <h2>{temperature.value[0]}°F</h2>
              </div>
              <div className="diagnosis-info-condition">
                <p>{temperature.levels[0]}</p>
              </div>
            </div>
            <div className="diagnosis-info diagnosis-heart-rate">
              <div className="diagnosis-info-icon">
                <img src="src\assets\HeartBPM.svg" alt="" />
              </div>
              <div className="diagnosis-info-detail">
                <p>Heart Rate</p>
                <h2>{heart_rate.value[0]} bpm</h2>
              </div>
              <div className="diagnosis-info-condition">
                <p>{heart_rate.levels[0]}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="diagnosis-list">
          <ConfigProvider
            theme={{
              components: {
                Table: {
                  headerSplitColor: "transparent",
                },
              },
            }}
          >
            <h2>Diagnosis List</h2>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              scroll={{
                y: 240,
              }}
            />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};
