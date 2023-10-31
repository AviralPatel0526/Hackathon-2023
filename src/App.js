
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AuthForm from './pages/AuthForm';
import Tenants from './pages/Tenants';
import Owners from './pages/Owners';
import NewTenantForm from './pages/NewTenantForm';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact="true" path="/" element={<Home/>}/>
    <Route exact="true" path="/SignUp" element={<AuthForm/>}/>
    <Route exact="true" path="/Tenants" element={<Tenants/>}/>
    <Route exact="true" path="/Owners" element={<Owners/>}/>
    <Route exact="true" path="/NewTenantForm" element={<NewTenantForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
