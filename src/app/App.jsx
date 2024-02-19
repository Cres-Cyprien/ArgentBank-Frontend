import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/home/Home"
import Login from "../features/auth/login/Login"
import User from "../features/user/User"
import Header from "../features/header/Header"
import Footer from "../features/footer/Footer"
import ProtectedRoute from "../features/protectedRoute/protectedRoute"
import './App.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
