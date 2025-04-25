import React, { useEffect, useState } from "react";
import api from "./services/api";
import AddEtudiantForm from "./components/AddEtudiantForm";
import EtudiantsList from "./components/EtudiantList";
import { Etudiant } from "./models/Etudiant";
import EtudiantDashboard from "./components/EtudiantDashboard";

const App: React.FC = () => {
  const [etudiants, setEtudiants] = useState<Etudiant[]>([]);

  const fetchEtudiants = async () => {
    const res = await api.get("/etudiants");
    setEtudiants(res.data);
  };

  useEffect(() => {
    fetchEtudiants();
  }, []);

  return <EtudiantDashboard />;
};

export default App;
