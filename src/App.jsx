import { useState } from 'react'
import './App.css'
import { Router, Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRout';
import Layout from './components/layout';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     
      <Routes>
        
      <Route element={<Login />} path='/login' />
      
        <Route element={<ProtectedRoute>
          <Layout /> </ProtectedRoute>} path='*' />
       
       
      </Routes>
     
  
    </>
  )
}

export default App
