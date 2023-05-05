import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const googleSignIn = (result) => API.post("/users/googleSignIn", result);

export const createCard = (cardData) => API.post("/cards", cardData);
export const deleteCard = (id) => API.delete(`/cards/${id}`);
export const updateCard = (id) => API.patch(`/cards/${id}`);
export const getCardsByUser = (userId) => API.get(`/cards/userCards/${userId}`);

const SECONDARY_API = axios.create({
  baseURL: process.env.REACT_APP_SECONDARY_API_URL,
});

SECONDARY_API.interceptors.request.use((config) => {
  config.headers.get["X-RapidAPI-Key"] =
    proccess.env.REACT_APP_SECONDARY_API_KEY;
  config.headers.get["X-RapidAPI-Host"] =
    proccess.env.REACT_APP_SECONDARY_API_HOST;
  return config;
});

export const generateNounWord = (length) =>
  SECONDARY_API.get(`/noun/${length}`);
