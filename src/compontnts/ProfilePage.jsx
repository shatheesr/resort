import React, { useEffect, useState } from 'react';
import './css/ProfilePage.css';
import Head from './Head';
import Foot from './Foot';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (!storedUsername) {
      navigate('/'); // Redirect to login page if user is not logged in
      return;
    }
    setUsername(storedUsername);
    fetchUserDetails(storedUsername);
  }, []);

  const fetchUserDetails = async (username) => {
    try {
      const response = await fetch(`http://localhost:8080/user/${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const data = await response.json();

      setEmail(data.email);
      setMobile(data.mobile);
    } catch (error) {
      console.error(error);
      // Handle error cases
    }
  };

  const book = () => {
    // Add your booking functionality here
    alert("Booking functionality is not implemented yet.");
  };

  const logout = () => {
    localStorage.removeItem("username");
    navigate('/');
  };

  const changePassword = () => {
    navigate('/changepassword');
  };

  const deleteUser = async () => {
    try {
      const response = await fetch(`http://localhost:8080/user/${username}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      localStorage.removeItem("username");
      navigate('/');
    } catch (error) {
      console.error(error);
      // Handle error cases
    }
  };

  return (
    <div>
      <Head/>
      <div className="profile-container">
        <h1>User Profile</h1>

        {/* User Details Section */}
        <div className="details-container">
          <h2>User Details</h2>
          <p>Name: {username}</p>
          <p>Email: {email}</p>
          <p>Mobile: {mobile}</p>
          {/* Add more user details as needed */}
        </div>

        {/* Change Password Button */}
        <button className="butto" onClick={changePassword}>Change Password</button>

        {/* Booking Button */}
        <button className="butto" onClick={book}>Your Booking</button>

        {/* Delete Button */}
        <button className="butto" onClick={deleteUser}>Delete User</button>

        {/* Logout Button */}
        <button className="butto" onClick={logout}>Logout</button>
      </div>
      <Foot/>
    </div>
  );
}

export default ProfilePage;
