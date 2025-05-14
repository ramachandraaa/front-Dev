import {
   
    Link
  } from 'react-router-dom';
 function HeaderComponent() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/welcome/Ramachandra">Welcome</Link></li>
            <li><Link to="/todos">Todos</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
export default HeaderComponent;