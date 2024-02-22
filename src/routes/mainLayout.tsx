import React from 'react'
import Navbar from '../components/common/Navbar'
import { Outlet } from 'react-router-dom'
import '../styles/Navbar.css';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
