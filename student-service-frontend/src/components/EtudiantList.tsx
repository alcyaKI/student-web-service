import React from "react";
import { Etudiant } from "../models/Etudiant";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const EtudiantsList: React.FC<{ etudiants: Etudiant[] }> = ({ etudiants }) => {
  return (
    <TableContainer component={Paper} className="mt-6 shadow-md">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Nom</strong>
            </TableCell>
            <TableCell>
              <strong>Prénom</strong>
            </TableCell>
            <TableCell>
              <strong>Email</strong>
            </TableCell>
            <TableCell>
              <strong>Date de naissance</strong>
            </TableCell>
            <TableCell>
              <strong>Classe</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {etudiants.map((etudiant) => (
            <TableRow key={etudiant._id}>
              <TableCell>{etudiant.nom}</TableCell>
              <TableCell>{etudiant.prenom}</TableCell>
              <TableCell>{etudiant.email}</TableCell>
              <TableCell>
                {new Date(etudiant.dateNaissance).toLocaleDateString()}
              </TableCell>
              <TableCell>{etudiant.classe}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EtudiantsList;
