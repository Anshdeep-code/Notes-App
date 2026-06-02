import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
});

const noteService = {
  getAll: async () => {
    const response = await api.get("/notes");
    return response.data;
  },

  create: async (noteData) => {
    const response = await api.post("/notes", noteData);
    return response.data;
  },

  update: async (id, noteData) => {
    const response = await api.put(`/notes/${id}`, noteData);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/notes/${id}`);
    return response.data;
  },
};

export default noteService;
