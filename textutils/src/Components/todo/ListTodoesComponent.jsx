import axios from "axios";
import { useState, useEffect } from "react";
import { DeleteTodoApi } from './APIcomponent';
import { useNavigate, useParams } from "react-router-dom";

function ListTodoes() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

 function CallTodoRestApis() {
 return axios.get("http://localhost:8080/todo/Ramachandra", {
  withCredentials: true,
 });
 }

  function refreshTodos() {
  CallTodoRestApis()
    .then((response) => {
      console.log(response.data)
      if (Array.isArray(response.data)) {
        setTodos(response.data);
      } else {
        console.error("Expected an array but got:", response.data);
        setTodos([]); // fallback to empty list
      }
    })
    .catch((error) => {
      console.error("Failed to fetch todos:", error);
      setTodos([]); // prevent map crash
    });
}

  useEffect(() => {
    refreshTodos(); // Load todos when component mounts
  }, []);

  function deleteTodo(id) {
    DeleteTodoApi('Ramachandra', id)
      .then(() => {
        refreshTodos();
      })
      .catch(error => console.error("Delete failed:", error));
  }

  function handleUpdate(id) {
    navigate(`/todosupdate/${id}`);
  }

  function handleAddTodo() {
    navigate('/AddTodo');
  }

  return (
    <div className="ListTodoesComponent">
      <h1>Things You Want To Do</h1>

      {todos.length > 0 ? (
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Description</td>
              <td>Is Done?</td>
              <td>Date</td>
              <td>Delete</td>
              <td>Update</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.localdate ? new Date(todo.localdate).toLocaleDateString() : 'No date'}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </td>
                <td>
                  <button className="btn btn-warning" onClick={() => handleUpdate(todo.id)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No todos available.</p>
      )}

      <div>
        <button className="btn-Success" onClick={handleAddTodo}>
          ADD Todos
        </button>
      </div>
    </div>
  );
}

export default ListTodoes;
