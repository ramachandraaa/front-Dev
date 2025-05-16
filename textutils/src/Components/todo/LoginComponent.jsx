import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMessage, setErrorMessage] = useState(false);
  const [showSuccessMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit() {
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        body: new URLSearchParams({
          username,
          password,
        }),
        credentials: 'include', // Sends cookies for session-based auth
      });

      if (response.ok) {
        setErrorMessage(false);
        setSuccessMessage(true);
        navigate(`/todos`);
      } else {
        setErrorMessage(true);
        setSuccessMessage(false);
      }
    } catch (error) {
      console.error('Login error:', error);
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
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>

        <div className="form-group">
          <button type="button" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
