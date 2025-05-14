import { useState } from 'react';
import {
    
    useNavigate,
    
  } from 'react-router-dom';
function LoginComponent() {
    const [username, setUsername] = useState('Ramachandra');
    const [password, setPassword] = useState('');
    const [showErrorMessage, setErrorMessage] = useState(false);
    const [showSuccessMessage, setSuccessMessage] = useState(false);
    const navigate = useNavigate();
  
    function HandleusernameChange(event) {
      setUsername(event.target.value);
    }
  
    function HandlePasswordChange(event) {
      setPassword(event.target.value);
    }
  
    function handlesubmit() {
      if (username === 'Ramachandra' && password === 'Gireei2s6^') {
        setErrorMessage(false);
        setSuccessMessage(true);
        navigate(`/welcome/${username}`);
      } else {
        setErrorMessage(true);
        setSuccessMessage(false);
      }
    }
  
    return (
      <div className="login">
        <div className="LoginForm">
          <h2>Login</h2>
  
          {showSuccessMessage && (
            <div className="success-message">✅ Authentication successful!</div>
          )}
          {showErrorMessage && (
            <div className="error-message">❌ Invalid credentials. Please try again.</div>
          )}
  
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="Username"
              value={username}
              onChange={HandleusernameChange}
              placeholder="Enter your username"
            />
          </div>
  
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="Password"
              value={password}
              onChange={HandlePasswordChange}
              placeholder="Enter your password"
            />
          </div>
  
          <div className="form-group">
            <button type="button" name="login" onClick={handlesubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default LoginComponent;
  