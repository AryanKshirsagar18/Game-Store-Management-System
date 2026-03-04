

---

# 🎮 Game Library Management System

A full-stack **MERN (MongoDB, Express, React, Node.js)** based web application that allows users to manage a collection of games. Users can create, view, edit, and delete game records with an interactive and responsive UI.

---

## 📌 Project Overview

The **Game Library Management System** is designed to help users maintain and organize their game collection efficiently.

This application provides:

* Game listing dashboard
* Add new games
* Edit existing game details
* Delete games
* View detailed game information

The project demonstrates full-stack development concepts including REST APIs, CRUD operations, routing, and frontend-backend integration.

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* Vite
* Tailwind CSS
* DaisyUI
* React Router
* Axios
* React Hot Toast

### Backend:

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 🚀 Features

* ✅ Create a new game record
* ✅ View all games
* ✅ View single game details
* ✅ Update game information
* ✅ Delete game
* ✅ Loading indicators and notifications
* ✅ Responsive UI design

---

## 📂 Project Structure

```
GameLibrary/
│
├── backend/
│   ├── src/
        |--config/db.js
│   │   ├── controllers/gameControllers.js
│   │   ├── models/gameModels.js
│   │   ├── routes/gameRoutes.js
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
|   |                 ├──Navbar.jsx
|   |                  ├──GameCard.jsx
|   |                  ├──GameNotFound.jsx
│   │   ├── pages/
|   |             ├──CreatePage.jsx
|   |             ├──GameDetailsPage.jsx
|   |             ├──HomePage.jsx
│   │   ├── lib/
|   |             ├──axios.js
|   |             ├──utils.js
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repository-link>
cd GameLibrary
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside backend folder:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Run backend server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

Backend will run on:

```
http://localhost:3000
```

---

## 🔄 API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/games     | Get all games   |
| GET    | /api/games/:id | Get single game |
| POST   | /api/games     | Create new game |
| PUT    | /api/games/:id | Update game     |
| DELETE | /api/games/:id | Delete game     |

---

## 🧠 Concepts Used

* RESTful API Design
* CRUD Operations
* MongoDB Database Integration
* React Hooks (useState, useEffect)
* Client-side Routing
* Axios for API calls
* Environment Variables
* Error Handling & Toast Notifications

---

## 📸 Screens (You Can Add Screenshots Here)

* Home Page
* Create Game Page
* Edit Game Page
* Game Detail Page

---

## 🎯 Learning Outcomes

Through this project, the following concepts were learned:

* Building a full-stack MERN application
* Connecting frontend with backend
* Managing application state
* Designing responsive UI
* Debugging routing and API issues
* Handling form data

---

## 👨‍💻 Author

**Name:** Aryan Kshirsagar
**Course:** (Bsc CS)
**Subject:** (Mern Stack)
**College:** (CHM College)

---

## 📄 License

This project is created for educational purposes only.

---

