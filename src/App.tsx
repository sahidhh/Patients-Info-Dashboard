import "./App.css";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Navbar } from "./components/Navbar";
import { PatientsList } from "./components/PatientsList";
import { PatientProfile } from "./components/PatientProfile";
import { PatientDiagnosis } from "./components/PatientDiagnosis";

function App() {
  return (
    <Layout>
      <Navbar />
      <Content
        style={{
          padding: "0 18px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <PatientsList />
        <PatientDiagnosis />
        <PatientProfile />
      </Content>
    </Layout>
  );
}

export default App;
