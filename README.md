# Etudiants Management Application

## Description

Cette application permet de gérer les étudiants avec les fonctionnalités suivantes :

- Inscrire un étudiant avec des informations telles que le nom, prénom, email, date de naissance et classe.
- Lister les étudiants inscrits.

Elle est composée de deux parties :

1. **Backend** : Une API Node.js avec Express, MongoDB pour stocker les données des étudiants.
2. **Frontend** : Une interface React.js permettant d'ajouter et de visualiser les étudiants dans un tableau.

## Prérequis

### Backend

- Node.js v16+
- MongoDB (via MongoDB Atlas ou une instance locale)

### Frontend

- Node.js v16+
- React.js (avec TypeScript et Tailwind CSS)
- Material UI pour les composants et les styles

---

## Installation et Configuration

### 1. Backend (API Node.js)

1. Clone le dépôt :

   ```bash
   git clone https://github.com/alcyaKI/student-web-service
   cd student-service-api
   ```

2. Installe les dépendances :

   ```bash
   npm install
   ```

3. Crée un fichier `.env` à la racine du projet backend et configure les variables d'environnement nécessaires :

   ```bash
   MONGO_URI=<votre_url_mongodb>
   ```

4. Lancer le serveur :
   ```bash
   npm start
   ```
   Le serveur backend sera disponible à `http://localhost:5000`.

---

### 2. Frontend (Application React.js)

1. Clone le dépôt :

   ```bash
   git clone <URL_DU_REPO>
   cd <dossier_frontend>
   ```

2. Installe les dépendances :

   ```bash
   npm install
   ```

3. Lance l'application :
   ```bash
   npm start
   ```
   L'application React.js sera accessible à `http://localhost:5175`.

---

## Structure du projet

### Backend

```bash
backend/
├── models/
│   └── Etudiant.js         # Modèle Mongoose pour les étudiants
├── routes/
│   └── etudiants.js        # Routes API pour gérer les étudiants
├── app.js                  # Initialisation de l'application Express
└── .env                    # Variables d'environnement (MongoDB URI)
```
