import React, { useState } from "react";
import api from "../services/api";
import { Etudiant } from "../models/Etudiant";
import { TextField, Button, Paper, Stack, Autocomplete } from "@mui/material";

const classesDisponibles = [
  "Prepa",
  "L1",
  "L2",
  "L3 AS",
  "L3 MSI",
  "L3 TLC",
  "L3 DSN",
  "L3 GL",
  "L4 AS",
  "L4 MSI",
  "L4 TLC",
  "L4 DSN",
  "L4 GL",
];

const AddEtudiantForm: React.FC<{ onAdd: () => void }> = ({ onAdd }) => {
  const [form, setForm] = useState<Etudiant>({
    nom: "",
    prenom: "",
    email: "",
    dateNaissance: "",
    classe: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/etudiants", form);
    setForm({
      nom: "",
      prenom: "",
      email: "",
      dateNaissance: "",
      classe: "",
    });
    onAdd();
  };

  return (
    <Paper className="p-6 shadow-md rounded mt-6">
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            name="nom"
            label="Nom"
            value={form.nom}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            name="prenom"
            label="Prénom"
            value={form.prenom}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            name="dateNaissance"
            label="Date de naissance"
            type="date"
            value={form.dateNaissance}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <Autocomplete
            options={classesDisponibles}
            value={form.classe}
            onChange={(_, newValue) => {
              setForm({ ...form, classe: newValue || "" });
            }}
            renderInput={(params) => (
              <TextField {...params} label="Classe" required />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="self-start"
          >
            Inscrire
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default AddEtudiantForm;
