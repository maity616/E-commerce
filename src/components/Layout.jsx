import React from 'react'
import { Router, Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Jewelery from './Jewelery';
import Menfashin from './Menfashin';
import Womenfashin from './Womenfashin';
import Electronic from './Electronic';
import Cart from './Cart';
import SingleProduct from './SingleProduct';
const Layout = () => {
  return (
    <>

      <Header />
      <Routes>
        <Route element={
        <Home />} path='*' />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route element={<Jewelery />} path='/jewelery' />
        <Route element={<Menfashin />} path='/menfashin' />
        <Route element={<Womenfashin />} path='/womenfashin' />
        <Route element={<Electronic />} path='/electronic' />
        <Route element={<Cart />} path='/cart' />
      </Routes>

      <Footer />
    </>
  )
}

export default Layout
