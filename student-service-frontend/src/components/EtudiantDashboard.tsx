import React, { useEffect, useState } from "react";
import AddEtudiantForm from "./AddEtudiantForm";
import { Etudiant } from "../models/Etudiant";
import api from "../services/api";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Box,
} from "@mui/material";
import EtudiantsList from "./EtudiantList";

const EtudiantDashboard: React.FC = () => {
  const [etudiants, setEtudiants] = useState<Etudiant[]>([]);

  const fetchEtudiants = async () => {
    const res = await api.get("/etudiants");
    setEtudiants(res.data);
  };

  useEffect(() => {
    fetchEtudiants();
  }, []);

  return (
    <Box
      sx={{ minHeight: "100vh", backgroundColor: "#F3F4F6", paddingBottom: 6 }}
    >
      {/* Header */}
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(to right, #4F46E5, #3B82F6)",
          paddingY: 2,
          boxShadow: 4,
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", color: "white" }}
          >
            🎓 Gestion des Étudiants
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Paper
          elevation={5}
          sx={{
            p: 4,
            borderRadius: 4,
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            sx={{
              display: { xs: "block", md: "grid" },
              gridTemplateColumns: { md: "1fr 2fr" },
              gap: 4,
            }}
          >
            {/* Formulaire à gauche (Mobile = Plein écran) */}
            <Box
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: "#EEF2FF",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.02)" },
                mb: { xs: 4, md: 0 },
              }}
            >
              <Typography
                variant="h6"
                sx={{ mb: 3, color: "#3730A3", fontWeight: "bold" }}
              >
                Inscrire un étudiant
              </Typography>
              <AddEtudiantForm onAdd={fetchEtudiants} />
            </Box>

            {/* Liste à droite (Mobile = Plein écran) */}
            <Box
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: "#E5E7EB",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.02)" },
              }}
            >
              <Typography
                variant="h6"
                sx={{ mb: 3, color: "#3730A3", fontWeight: "bold" }}
              >
                Étudiants enregistrés
              </Typography>
              <EtudiantsList etudiants={etudiants} />
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default EtudiantDashboard;
