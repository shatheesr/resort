import React from 'react';
import './css/HeadFoot.css';


const HeadFoot = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Resort</h1>
        <div className="navigation"> 
          <h3>home</h3> 
          <h3>About&nbsp;us</h3>
          <h3>Contact&nbsp;Us</h3>
          <div className="profile">
            {/* Add your profile content here */}
            <img src=" " alt="Profile Picture" />
            <h4 className='pro'>Your&nbsp;Name</h4>
          </div>
        </div>
      </header>

      <footer>
        <div>
          <h3>Contact Information</h3>
          <p>Address: 123 Beach Road, Pondicherry</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
      </footer>
    </div>
  );
}

export default HeadFoot;
