import React, { useEffect, useState } from 'react';
import './css/ChangePasswordPage.css';
import Head from './Head';
import Foot from './Foot';
import swal from 'sweetalert';
function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState("");
  useEffect(()=>{
    const username = localStorage.getItem("username");
    setUsername(username);
  })

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirm password don't match");
      return;
    }

    try {
        const response = await fetch(`http://localhost:8080/user/${username}/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to change password');
      }
      swal({
        title: "Password changed successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
    } catch (error) {
      console.error(error);
    //   alert()
      setErrorMessage('An error occurred while changing the password');
    }
  };

  return (
    <div className='full'>
      <Head />
      <div className="change-password-container">
        <h1>Change Password</h1>

        {/* Current Password */}
        <div className="form-group">
          <label htmlFor="currentPassword">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            className='pass'
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>

        {/* New Password */}
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            className='pass'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className='pass'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Error Message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Change Password Button */}
        <button className="change-password-button" onClick={handleChangePassword}>
          Change Password
        </button>
      </div>
      <Foot />
    </div>
  );
}

export default ChangePasswordPage;
