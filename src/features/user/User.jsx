import Account from "../../features/account/Account"
import accountList from "../../data/accountList"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentToken, setUser } from "../auth/authSlice"
import { postProfile } from "../profile/profileApi"
import EditName from "../profile/editName/EditName"
import './User.scss'
import { useEffect } from "react"

function User() {
  const token = useSelector(selectCurrentToken)
  const dispatch = useDispatch()

  useEffect(() => {
    postProfile(token)
      .then(data => {
        dispatch(setUser(data.body))
      })
  }, [])

  return (
    <div className="main bg-dark">
      <EditName />
      <div>
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