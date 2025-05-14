
import { useState } from 'react';
import axios from 'axios';
import './Todoapp.css';
import HeaderComponent from './HeaderComponent.jsx';
import ListTodoes from './ListTodoesComponent.jsx';
import LoginComponent from './LoginComponent.jsx';
import CallTodoRestApi from './APIcomponent.jsx';
import { DeleteTodoApi } from './APIcomponent';
import UpdatePage from './todoUpdate.jsx'
import Addtodopage from './AddTodo.jsx';


import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
} from 'react-router-dom';

export default function Todoapp() {  
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={<Welcomecomponent />} />
          <Route path="/welcome" element={<MissingUsername />} />
          <Route path="/todos" element={<ListTodoes />} />
          <Route path="/todosupdate/:id" element={<UpdatePage />} />
          <Route path="/AddTodo" element={<Addtodopage />} />


        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}


function FooterComponent() {
  return (
    <footer className="footer">
      <span className="text-muted">© 2025 Ram Chandra Inc. All rights reserved.</span>
    </footer>
  );
}



function Welcomecomponent() {
  const params = useParams();
  const [messege,Setmessege]=useState(null)
  return (
    <div>
      WELCOME TO THE CODING WORLD {params.username}
      <div>
        Manage Your Todos- <Link to="/todos"> Go Here</Link>
      </div>
      <div>
        <button className= "btn-Success" onClick={CallTodoRestApi}>Call Helloworld</button>
      </div>
      <div className="text-info">
{messege}
      </div>
    </div>
  );
  function CallTodoRestApi() {
    console.log('called');
    axios.get('http://localhost:8080/test')
      .then((response) => SuccessfullResponce(response))
      .catch((error) => errorfullResponce(error))
      .finally(() => console.log('Cleanup'));
    
  }
  
  function SuccessfullResponce(response) {
    console.log("SUCCESS:", response);
    Setmessege(response.data)
  }
  
  function errorfullResponce(error) {
    console.error("ERROR:", error);
  }
}


function MissingUsername() {
  return (
    <div>
      Username is missing from the URL. Please <a href="/login">login again</a>.
    </div>
  );
}
