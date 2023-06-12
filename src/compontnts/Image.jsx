import React from 'react';
import img1 from"./img/room-1.jpeg";
import img2 from "./img/room-2.jpeg"
import img3 from "./img/room-3.jpeg";
import img4 from "./img/room-4.jpeg";
import img5 from "./img/room-5.jpeg";
import img6 from "./img/room-6.jpeg";
import Head from './Head';
import Foot from './Foot';

const Image = () => {
  return (
    <div>
      <Head/>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img src={img1} alt="Image 1" style={{ width: '33.33%' }} />
        <img src={img2} alt="Image 2" style={{ width: '33.33%' }} />
        <img src={img3} alt="Image 3" style={{ width: '33.33%' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img src={img4} alt="Image 4" style={{ width: '33.33%' }} />
        <img src={img5} alt="Image 5" style={{ width: '33.33%' }} />
        <img src={img6} alt="Image 6" style={{ width: '33.33%' }} />
      </div>
      <Foot/>
    </div>
  );
};

export default Image;
