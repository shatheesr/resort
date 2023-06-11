import React, { useEffect } from 'react';
import Head from './Head';
import Foot from './Foot';
import './css/home.css'
import Maphome from './Maphome';
import Services from './Services';
const HomePage = () => {

  
  return (
    <div className='bomain'>
      <main className='he' >
    <Head/>
        
        <Services/>
        <Maphome/>
      </main>
      <Foot/>

     
    </div>
  );
}

export default HomePage;
