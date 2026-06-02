# 📝 Notes App

A full-stack Notes App built with React, Node.js, Express, and MongoDB. Users can create, view, update, delete, and search notes through a clean and responsive interface.

## 🚀 Features

- Create notes
- View all notes
- Edit existing notes
- Delete notes
- Search notes by title or content
- MongoDB Atlas database integration
- Responsive UI built with React and Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## 📂 Project Structure

```text
notes-app/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
https://github.com/Anshdeep-code/Notes-App.git
cd notes-app
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Create a `.env` file inside the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## ▶️ Running the Application

### Start Backend

```bash
cd backend
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

### Start Frontend

Open a second terminal:

```bash
cd frontend
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 📡 API Endpoints

### Get All Notes

```http
GET /api/notes
```

### Create Note

```http
POST /api/notes
```

Example Request Body:

```json
{
  "title": "My Note",
  "content": "This is a sample note."
}
```

### Update Note

```http
PUT /api/notes/:id
```

### Delete Note

```http
DELETE /api/notes/:id
```

---

## 📸 Screenshots

<img width="1636" height="777" alt="image" src="https://github.com/user-attachments/assets/7dafbb54-8a5e-4963-963b-e2274767ba22" />


---

## 🎯 Learning Outcomes

Through this project, I learned:

- Building REST APIs with Express
- Connecting Node.js applications to MongoDB Atlas
- Managing state in React
- Handling CRUD operations
- Using Axios for API requests
- Organizing a full-stack project structure
- Working with Git and GitHub

---

## 👨‍💻 Author

Anshdeep Singh

GitHub: https://github.com/Anshdeep-code
