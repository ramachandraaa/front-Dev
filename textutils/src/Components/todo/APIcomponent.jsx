import axios from 'axios'
export const DeleteTodoApi
=(username,id)=>axios.delete(`http://localhost:8080/todo/${username}/${id}`)
export const UpdateTodoApi
=(username,id)=>axios.get(`http://localhost:8080/todo/${username}/${id}`)
export const UpdateApi
=(username,id,todo)=>axios.put(`http://localhost:8080/todo/${username}/${id}`,todo)
export const AddtodoApi
=(username,todo)=>axios.post(`http://localhost:8080/todo/${username}`,todo)
export const LoginApi=
()=>axios.post(`http://localhost:8080/login`)