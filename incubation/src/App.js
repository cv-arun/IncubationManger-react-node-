
import React from 'react'
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';

import SignupPage from './pages/SignupForm';
import UserLogin from './pages/UserLogin';
import UserHome from './pages/UserHome'
import AdminLoginPage from './pages/AdminLogin';
import AdminHome from './pages/AdminHome';



function App() {

  return (

    <Container fluid>
      <Routes>
        <Route exact path="/" element={<UserHome />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<UserLogin />} />

        <Route path="admin" >

          <Route exact path="" element={<AdminHome />} />
          <Route path="login" element={<AdminLoginPage />} />
        </Route>
      </Routes>

    </Container>

  );
}

export default App;
