import React, { useEffect, useState } from 'react';
import './css/Head.css';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
const Head = () => {

  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    const username = localStorage.getItem("username");
    setUsername(username);
  })
  const handleSubmit = event => {
    navigate('/contactus');
    
 
  };
  const handleaboutus = event => {
    navigate('/aboutus');
    
 
  };
  const handlehomeSubmit = event => {
    navigate('/homepage');
    
 
  };
  const handleprofile = event => {
    navigate('/profilepage');
    

  };
  return (
    <div>
      <header>
        <h1>Happy&nbsp;Mornings</h1>
        <div className="navigation"> 
          <h3 onClick={handlehomeSubmit}>home</h3> 
          <h3 onClick={handleaboutus}>About&nbsp;us</h3>
          <h3 onClick={handleSubmit}>Contact&nbsp;Us</h3>
          <div className="profile" onClick={handleprofile}>
            {/* Add your profile content here */}
            <Avatar alt="Remy Sharp" src="" />
            <br />
            <br />
            <br />
            <h4 className='pro'>{username}</h4>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Head;
