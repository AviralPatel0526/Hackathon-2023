
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AuthForm from './pages/AuthForm';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact="true" path="/" element={<Home/>}/>
    <Route exact="true" path="/SignUp" element={<AuthForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
