import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {Router, createRoot} from "react-router-dom";
import ContactUs from "./ContactUs";
import HomePage from "./HomePage";
import Login from "./Login";
import SignupPage from "./SignupPage";
import ProfilePage from './ProfilePage'; 
import ChangePasswordPage from './ChangePasswordPage';
import AboutUsPage from './AboutUsPage';
export default function Routing() {
  return (
    <div>
        <Router>
            <Routes>

            <Route path="/" element={<Login/>}/>
            <Route path="/signuppage" element={<SignupPage/>}/>
            <Route path="/homepage" element={<HomePage/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path='/profilepage' element={<ProfilePage/>}/>
            <Route path='/changepassword' element={<ChangePasswordPage/>}/>
            <Route path='/aboutus' element={<AboutUsPage/>}/>
            </Routes>
        </Router>

    </div>
  )
}
