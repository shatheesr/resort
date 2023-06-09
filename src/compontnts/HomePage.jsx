import React, { useEffect } from 'react';
import Head from './Head';
import Foot from './Foot';
import './css/home.css'
import Maphome from './Maphome';
import { useNavigate } from 'react-router-dom';
import Services from './Services';
const HomePage = () => {

  
  return (
    <div className='bomain'>
      {/* <main > */}
    <Head/>
        {/* <h2>About Us</h2>
        <p>Location: Pondicherry</p>
        <p>Near the Beach</p>
        <p>Enjoy your stay with us!</p> */}
        <Services/>
        <Maphome/>
      <Foot/>
      {/* </main> */}

     
    </div>
  );
}

export default HomePage;
