import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Router, Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Jewelery from './components/Jewelery';
import Menfashin from './components/Menfashin';
import Womenfashin from './components/Womenfashin';
import Electronic from './components/Electronic';
import Cart from './components/Cart';
import SingleProduct from './components/SingleProduct';
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
          <Layout /> </ProtectedRoute>} path='/' />
       
       
      </Routes>
     
  
    </>
  )
}

export default App
