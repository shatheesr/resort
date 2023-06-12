import React, { useState } from 'react';
import axios from 'axios';
import './css/LoginPage.css';
import { useNavigate } from 'react-router-dom';
const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleMobileChange = event => {
    setMobile(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
      mobile: mobile
    };

    axios.post('http://127.0.0.1:8080/user/rpost', data)
      .then(response => {
        // handle success
        navigate('/');
        alert(response.data)
        console.log(response.data);
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  };

  return (
    <div className='loginbody'>
    <div className='login-form'>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <label className='lab'>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} className='inp' required/>
        </label>
        <label className='lab'>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} className='inp' required/>
        </label>
        <label className='lab'>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} className='inp' required/>
        </label>
        <label className='lab'>
          Mobile:
          <input type="tel" value={mobile} onChange={handleMobileChange} className='inp' required/>
        </label>
        <button type="submit" className='but' >Signup</button>
      </form>
    </div>
    </div>
  );
};

export default SignupPage;
