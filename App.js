import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    reEnterPassword: '',
  });

  const [isSignUp, setIsSignUp] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const url = isSignUp ? 'http://backend-server-address/signup' : 'http://backend-server-address/login';
    /*Replace http://backend-server-address/signup and http://backend-server-address/login with the actual addresses 
    provided from the back-end.

    So the front-end will send the appropriate HTTP requests to the back-end for both sign-up and login functionalities.
    */
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        console.log(data.message);
        // Redirect user to home page or wherever you'd like
      } else {
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('There was an error making the request:', error);
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({ username: '', email: '', password: '', reEnterPassword: '' });
  };

  return (
    <div className="App">
      <h1>{isSignUp ? 'Sign Up for StudEase' : 'Login to StudEase'}</h1>
      <button onClick={toggleForm}>
        {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
      </button>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
          </div>
        )}
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        {isSignUp && (
          <div className="form-group">
            <label>Re-enter Password</label>
            <input type="password" name="reEnterPassword" value={formData.reEnterPassword} onChange={handleInputChange} required />
          </div>
        )}
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
    </div>
  );
}

export default App;
