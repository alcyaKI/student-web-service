// routes/etudiants.js
const express = require("express");
const router = express.Router();
const Etudiant = require("../models/Etudiant");

// POST: Inscrire un étudiant
router.post("/", async (req, res) => {
  try {
    const etudiant = new Etudiant(req.body);
    await etudiant.save();
    res.status(201).json(etudiant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET: Lister les étudiants
router.get("/", async (req, res) => {
  try {
    const etudiants = await Etudiant.find();
    res.json(etudiants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
