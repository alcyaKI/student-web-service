// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const etudiantsRoute = require("./routes/etudiants");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connecté à MongoDB Atlas"))
  .catch((err) => console.error(err));

app.use("/etudiants", etudiantsRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Serveur en marche sur le port ${port}`));
