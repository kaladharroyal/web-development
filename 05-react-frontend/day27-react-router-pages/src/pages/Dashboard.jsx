import React from 'react'
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div>Dashboard
    <Link to='profile'>Profile</Link>
    <Link to='settings'>Settings</Link>
    <Outlet/>
    </div>
  )
}

export default Dashboard
