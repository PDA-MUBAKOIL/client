import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer';

import '../styles/Navbar.css';
import '../styles/Footer.css';


export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}
