import React from 'react'
import Navbar from './Navbar'
import Foter from './Foter'
import { Outlet } from 'react-router-dom'
import Before from './Before'

export default function Layout() {
  return <>
  <Navbar/>
  <Outlet/>
  <Before/>
  <Foter/>
  </>

}
