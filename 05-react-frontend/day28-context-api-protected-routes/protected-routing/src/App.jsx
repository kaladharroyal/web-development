import React from 'react'
import NavScrollExample from './components/NavbarComp'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import UserProfile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import Admin from './pages/Admin';
import PageNotFound from './pages/PageNotFound';


const App = () => {
  return (
    <div>

      <Router>
        <NavScrollExample />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/user/:userId' element={<UserProfile />} />
          <Route path='/login' element = {<login/>} />
          <Route path='/dashboard' element={<Dashboard />} >
            <Route path='profile' element={<Profile />} />
            <Route path='settings' element={<Settings />} />
          </ Route >

          <Route path= '/admin' element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }>

          </Route>

          <Route path = '*' element= {<PageNotFound />} /> //used for page not Found
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App