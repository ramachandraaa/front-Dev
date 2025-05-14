import axios from "axios";
import { useState, useEffect } from "react";
import { DeleteTodoApi } from './APIcomponent';
import {UpdateTodoApi} from './APIcomponent';
import { useNavigate, useParams } from "react-router-dom";
import {Formik,Form,Field} from 'formik';
import {updateDodo} from './todoUpdate'

function ListTodoes() {
  

  const [todos, setTodos] = useState([]);
  const naviate=useNavigate();
  const [description,setDescription]=useState('')
  const [TargetDate,setTargetdate]=useState('')

  function CallTodoRestApis() {
    console.log("called");
    return axios.get("http://localhost:8080/todo/Ramachandra");
  }

  function refreshTodos() {
    CallTodoRestApis().then((response) => {
      console.log(response.data);
      setTodos(response.data); // Set only the data from the response
    });
  }
const {id}=useParams()
  useEffect(() => {
    refreshTodos(); // Call only once when the component mounts
  }, []);
function deleteTodo(id)
{

  console.log('clicked' +id)
  DeleteTodoApi('Ramachandra',id)
  .then(
()=>{
  refreshTodos()
}
  )
  .catch(error=>console.log(error))
}

function updateDodo(id)

{
console.log('Clicked'+ id)
// UpdateTodoApi('Ramachandra',id)
  naviate(`/todosupdate/${id}`)
// UpdateTodoApi('Ramachandra',id)
// .then(responce=>{
//   console.log(responce.data.description)
//   console.log(responce.data.localdate)
//   setDescription(responce.data.description)
//   setTargetdate(responce.data.localdate)
// })
// .catch(error=>console.log(error))


}
function AddnewTodo()
{
  console.log('Clicked TodoButton')
  naviate('/AddTodo')
}
  return (
    <div className="ListTodoesComponent">
      <h1>Things You Want To Do</h1>
      <div>
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
                <td>{new Date(todo.localdate)?.toString()}</td>
                <td>
                  <button className="btn btn-warning" onClick={()=>deleteTodo(todo.id)}> Delete</button>
                   </td>
                   <td>
                    <button className="btn btn-warning" onClick={()=>updateDodo(todo.id)}>Update</button>
                   </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button className="btn-Success" onClick={()=>AddnewTodo()}>
          ADD Todos
        </button>
      </div>
    </div>
  );

}

export default ListTodoes;
