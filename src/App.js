import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './authPages/LoginPage/LoginPage'
import RegisterPage from './authPages/RegisterPage/RegisterPage'
import Dashboard from './dashboard/Dashboard';
import AlertNotification from './shared/components/AlertNotification';

function App() {
  return <>
    <Router>
      <Routes>
        <Route Route exact path = '/login'
        element={ <LoginPage/> }>
          {/* <LoginPage/> */}
        </Route>

        <Route exact path = '/register' element = {< RegisterPage/>} >
          {/* <RegisterPage/> */}
        </Route>
        
        <Route exact path = '/dashboard' element = {<Dashboard/>} >
          {/* <Dashboard/> */}
        </Route>
        
        <Route path = '/' element = {< Navigate to='/dashboard'/>}>
          {/* <Navigate to='/dashboard'/> */}
        </Route>

      </Routes>
    </Router>
    <AlertNotification/>
  </>
}

export default App;
