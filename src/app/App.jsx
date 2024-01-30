import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import User from "../pages/user/User"
import Header from "../features/header/Header"
import Footer from "../features/footer/Footer"
import './App.scss'

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/user" element={<User />}/>
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  )
}

export default App
