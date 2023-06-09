import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './css/LoginPage.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };
// const sign = event =>{
//   navigate('/homepage');
// }
const handleloginSubmit = event => {
  navigate('/signuppage');
  

};
  const handleSubmit = event => {
    event.preventDefault();

    

    

    axios.post('http://127.0.0.1:8080/user/login', {username, password})
      .then(response => {
        // handle success
        if(response.data==="Login Successful"){
          // alert(response.data);
          swal({
            title: "Login Successful!",
            text: "You clicked the button!",
            icon: "success",
          });
          sessionStorage.setItem("username", username);
          localStorage.setItem("username", username);
          navigate('/homepage');
        }else if(response.data==="Login Failed"){
          // alert(response.data);
          swal({
              title: "Login Failed!",
              text: "username and password are not match!",
              icon: "warning",
              dangerMode: true,
            });
          }
          else{
          // alert(response.data);
          swal({
            title: "No User Found/nPlease Try Again!!!!",
            text: "Or Signup",
            icon: "error",
            dangerMode: true,
          });

        }
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  };

  return (
    <div className='loginbody'>

    <div className='login-form'>
      <h1>Login Page</h1>
      <form>
        <label className='lab'>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} className='inp'required/>
        </label>
        <label className='lab'>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} className='inp'required/>
        </label>
        <a href="/resort/forgetpassword" role="link" tabindex="0">Forgotten your password?</a>
        <br />
        <button type="submit" onClick={handleSubmit} className='but'>Login</button>
        <p>Not a member?<h4 onClick={handleloginSubmit} className='forget'>Sign Up</h4></p>
      </form>
    </div>
    </div>
  );
};

export default Login;
