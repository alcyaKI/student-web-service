// models/Etudiant.js
const mongoose = require("mongoose");

const etudiantSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dateNaissance: { type: Date },
  classe: { type: String, required: true },
});

module.exports = mongoose.model("Etudiant", etudiantSchema);
