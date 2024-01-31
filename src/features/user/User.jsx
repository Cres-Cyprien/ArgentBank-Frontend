import Account from "../../features/account/Account"
import accountList from "../../data/accountList"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../auth/authSlice"

import './User.scss'

function User() {
  const token = useSelector(selectCurrentToken)

  return(
    <div className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
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
  )
}

export default User