import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import User from "../pages/User"
import '../styles/App.scss'

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/user" element={<User />}/>
        </Routes>
      </Router>
    </React.StrictMode>
  )
}

export default App
