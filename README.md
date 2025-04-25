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

3. Lancer le serveur :
   ```bash
   npm start
   ```
   Le serveur backend sera disponible à `http://localhost:5000`.

---

### 2. Frontend (Application React.js)

1. Clone le dépôt :

   ```bash
   git clone https://github.com/alcyaKI/student-web-service
   cd student-service-frontend
   ```

2. Installe les dépendances :

   ```bash
   npm install
   ```

3. Lance l'application :
   ```bash
   npm start
   ```
   L'application React.js sera accessible à `http://localhost:5173`.

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

### Fontend

```bash
frontend/
├── src/
│   ├── components/
│   │   ├── AddEtudiantForm.tsx  # Formulaire pour ajouter un étudiant
│   │   └── EtudiantsList.tsx    # Liste des étudiants
│   ├── services/
│   │   └── api.ts              # Service pour interagir avec l'API
│   ├── models/
│   │   └── Etudiant.ts          # Interface TypeScript pour un étudiant
│   ├── App.tsx                 # Composant principal
│   └── index.tsx               # Point d'entrée de l'application React
├── tailwind.config.js         # Configuration Tailwind CSS
└── tsconfig.json              # Configuration TypeScript
```
