import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

export interface PatientsRecord {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: [
    {
      month: "March";
      year: 2024;
      blood_pressure: {
        systolic: {
          value: number;
          levels: string;
        };
        diastolic: {
          value: number;
          levels: string;
        };
      };
      heart_rate: {
        value: number;
        levels: string;
      };
      respiratory_rate: {
        value: number;
        levels: string;
      };
      temperature: {
        value: number;
        levels: string;
      };
    }
  ];
  diagnostic_list: [];
  lab_results: [];
}

type PatientsBioType = {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
};

type DiagnosisHistoryType = {
  date: string[];
  blood_pressure_systolic: { value: number[]; levels: string[] };
  blood_pressure_diastolic: { value: number[]; levels: string[] };
  heart_rate: { value: number[]; levels: string[] };
  respiratory_rate: { value: number[]; levels: string[] };
  temperature: { value: number[]; levels: string[] };
};

interface PatientsRecordsContextType {
  records: PatientsRecord[];
  setCurrentPatient: (name: string) => void;
  getDiagnosisHistory: () => DiagnosisHistoryType;
  getDiagnosticList: () =>
    | { name: string; description: string; status: string }[]
    | undefined;
  getPatientBio: () => PatientsBioType;
  getLabResults: () => [] | undefined;
}

const PatientsContext = createContext<PatientsRecordsContextType | undefined>(
  undefined
);

const auth = btoa(
  `${import.meta.env.VITE_USERNAME}:${import.meta.env.VITE_PASSWORD}`
);

export function PatientsRecordProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [records, setRecords] = useState<PatientsRecord[]>([]);
  const [currentPatient, setCurrentPatient] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    setRecords(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getDiagnosisHistory = () => {
    const patient = records.find((o) => o.name === currentPatient);
    const diagnosisHistory: DiagnosisHistoryType = {
      date: [],
      blood_pressure_systolic: { value: [], levels: [] },
      blood_pressure_diastolic: { value: [], levels: [] },
      heart_rate: { value: [], levels: [] },
      respiratory_rate: { value: [], levels: [] },
      temperature: { value: [], levels: [] },
    };
    patient?.diagnosis_history.forEach(
      ({
        month,
        year,
        blood_pressure,
        heart_rate,
        respiratory_rate,
        temperature,
      }) => {
        diagnosisHistory.date.push(`${month.substring(0, 3)}, ${year}`);
        diagnosisHistory.blood_pressure_systolic.value.push(
          blood_pressure.systolic.value
        );
        diagnosisHistory.blood_pressure_systolic.levels.push(
          blood_pressure.systolic.levels
        );
        diagnosisHistory.blood_pressure_diastolic.value.push(
          blood_pressure.diastolic.value
        );
        diagnosisHistory.blood_pressure_diastolic.levels.push(
          blood_pressure.diastolic.levels
        );
        diagnosisHistory.heart_rate.value.push(heart_rate.value);
        diagnosisHistory.heart_rate.levels.push(heart_rate.levels);
        diagnosisHistory.respiratory_rate.value.push(respiratory_rate.value);
        diagnosisHistory.respiratory_rate.levels.push(respiratory_rate.levels);
        diagnosisHistory.temperature.value.push(temperature.value);
        diagnosisHistory.temperature.levels.push(temperature.levels);
      }
    );

    return diagnosisHistory;
  };

  const getDiagnosticList = () => {
    const patient = records.find((o) => o.name === currentPatient);
    return patient?.diagnostic_list;
  };

  const getLabResults = () => {
    const patient = records.find((o) => o.name === currentPatient);
    return patient?.lab_results;
  };

  const getPatientBio = () => {
    const patient = records.find((o) => o.name === currentPatient);
    const { diagnosis_history, diagnostic_list, lab_results, ...rest } =
      Object.assign({}, patient);
    return rest;
  };

  return (
    <PatientsContext.Provider
      value={{
        records,
        getDiagnosisHistory,
        getDiagnosticList,
        getPatientBio,
        getLabResults,
        setCurrentPatient,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
}

export function usePatientsRecords() {
  const context = useContext(PatientsContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
