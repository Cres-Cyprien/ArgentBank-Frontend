import { Link } from "react-router-dom"
import './Header.scss'
import { useSelector, useDispatch } from "react-redux"
import { selectCurrentToken, selectCurrentFirstName, logOut } from "../auth/authSlice"

function Header() {
  const token = useSelector(selectCurrentToken)
  const firstName = useSelector(selectCurrentFirstName)
  const dispatch = useDispatch()

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="src/assets/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <div className="main-nav-auth">
            <Link to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </Link>
            <Link  to="/login" className="main-nav-item" onClick={() => dispatch(logOut())}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          <Link  to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
             Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Header