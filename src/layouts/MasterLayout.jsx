import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar';

export default function MasterLayout() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>    
  )
}
