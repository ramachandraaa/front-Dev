// import axios from 'axios'
// export const DeleteTodoApi
// =(username,id)=>axios.delete(`http://localhost:8080/todo/${username}/${id}`)
// export const UpdateTodoApi
// =(username,id)=>axios.get(`http://localhost:8080/todo/${username}/${id}`)
// export const UpdateApi
// =(username,id,todo)=>axios.put(`http://localhost:8080/todo/${username}/${id}`,todo)
// export const AddtodoApi
// =(username,todo)=>axios.post(`http://localhost:8080/todo/${username}`,todo)
// export const LoginApi=
// ()=>axios.post(`http://localhost:8080/login`)
import axios from 'axios';

// Base Axios instance to ensure credentials (cookies) are always sent
const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true, // ✅ important for session auth (cookies)
});

// DELETE a todo
export const DeleteTodoApi = (username, id) =>
  apiClient.delete(`/todo/${username}/${id}`);

// GET a todo by ID (for update)
export const UpdateTodoApi = (username, id) =>
  apiClient.get(`/todo/${username}/${id}`);

// PUT to update a todo
export const UpdateApi = (username, id, todo) =>
  apiClient.put(`/todo/${username}/${id}`, todo);

// POST to create a new todo
export const AddtodoApi = (username, todo) =>
  apiClient.post(`/todo/${username}`, todo);

// POST to login
export const LoginApi = (username, password) =>
  apiClient.post(
    '/login',
    new URLSearchParams({ username, password }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
