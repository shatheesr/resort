import React, { useEffect } from 'react';
import Head from './Head';
import Foot from './Foot';
import './css/home.css'
import { useNavigate } from 'react-router-dom';
const HomePage = () => {

  
  return (
    <div>
    <Head/>
    
      <main className='bomain'>
        <h2>About Us</h2>
        <p>Location: Pondicherry</p>
        <p>Near the Beach</p>
        <p>Enjoy your stay with us!</p>
      </main>
      <Foot/>

     
    </div>
  );
}

export default HomePage;
