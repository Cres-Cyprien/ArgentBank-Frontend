import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Login from "../features/auth/login/Login"
import User from "../features/user/User"
import Header from "../features/header/Header"
import Footer from "../features/footer/Footer"
import ProtectedRoute from "../features/protectedRoute/protectedRoute"
import './App.scss'


function App() {

  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/user" element={
            <ProtectedRoute>
            <User/>
            </ProtectedRoute>
          }/>
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  )
}

export default App
