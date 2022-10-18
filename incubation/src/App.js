
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
import RecordPage from './pages/Record';
import SlotBookingPage from './pages/SlotBookingPage';
import Application from './pages/Application';
import AdminHome from './pages/AdminHome';
import ViewApplication from './pages/ViewApplication';
import ApplicationStatus from './pages/UserAppllicationStatus';
import UserDetails from './pages/UserDetails';



function App() {

  return (

    <Container fluid>
      <Routes>
        <Route exact path="/" element={<UserHome />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/status" element={<ApplicationStatus />} />

        <Route  >

          <Route path="/admin" element={<AdminHome />} />
          <Route path="admin/application/view" element={<ViewApplication />} />
          <Route path="admin/application" element={<Application />} />
          <Route path="admin/login" element={<AdminLoginPage />} />
          <Route path="admin/record" element={<RecordPage />} />
          <Route path="admin/slot" element={<SlotBookingPage />} />
          <Route path="admin/users" element={<UserDetails />} />

        </Route>
      </Routes>

    </Container>

  );
}

export default App;
