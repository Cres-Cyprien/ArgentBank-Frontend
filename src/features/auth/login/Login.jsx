import { useDispatch } from "react-redux"
import { postLogin } from "../authApi"
import { setAccessToken } from "../authSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Login.scss'


function Login() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleUserNameInput = e => setUserName(e.target.value)
  const handlePasswordInput = e => setPassword(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    postLogin({ email: userName, password})
      .then(data => {
        dispatch(setAccessToken(data.body.token))
        navigate("/user")
      })
  }

  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={userName} onChange={handleUserNameInput}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handlePasswordInput}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
            <button className="sign-in-button" type="submit" >
              Sign-in
            </button>
        </form>
      </section>
    </div>
  )
}

export default Login