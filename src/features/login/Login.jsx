import { Link } from "react-router-dom"
import './Login.scss'
import { useDispatch, useSelector } from "react-redux"
import { accessToken } from "./loginSlice"

function Login() {
  const signIn = useSelector((state) => state.token)
  const dispatch = useDispatch()

  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Link to="/user">
            <button 
              onClick={() => dispatch(accessToken())}
              className="sign-in-button" 
            >
              Sign-in
            </button>
          </Link>
        </form>
      </section>
    </div>
  )
}

export default Login