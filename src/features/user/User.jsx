import Account from "../../features/account/Account"
import accountList from "../../data/accountList"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentToken, selectCurrentUserName, setFirstName, setLastName, setUser, setUserName } from "../auth/authSlice"
import { postProfile } from "../auth/authApi"
import './User.scss'

function User() {
  const token = useSelector(selectCurrentToken)
  const dispatch = useDispatch()
  postProfile(token)
  .then(data => {
    dispatch(setUser(data.body.email))
    dispatch(setFirstName(data.body.firstName))
    dispatch(setLastName(data.body.lastName))
    dispatch(setUserName(data.body.userName))
  })

  const userName = useSelector(selectCurrentUserName)

  return(
    <div>
      <div className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{userName}</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <div>
          {accountList.map(({ id, title, amount, amountDescription }) => (
            <div key={id}>
              <Account title={title} amount={amount} amountDescription={amountDescription} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default User