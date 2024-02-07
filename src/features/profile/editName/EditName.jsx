import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { selectCurrentToken, setUser } from "../../auth/authSlice"
import { putProfile } from "../profileApi"
import "./EditName.scss"



function EditName() {
  const [userName, setUserName] = useState("")
  const token = useSelector(selectCurrentToken)
  const [showEdit, setShowEdit] = useState("")
  const dispatch = useDispatch()
  const open = () => setShowEdit(true)
  const close = () => setShowEdit(false)
  const currentUserName = useSelector((state) => {
    const currentUser = state.auth.user
    return currentUser?.userName
  })
  const firstName = useSelector((state) => {
    const currentUser = state.auth.user
    return currentUser?.firstName
  })
  const lastName = useSelector((state) => {
    const currentUser = state.auth.user
    return currentUser?.lastName
  })


  const handleSubmit = async (e) => {
    e.preventDefault()
    putProfile(token, userName)
      .then(data => {
        dispatch(setUser(data.body))
        setShowEdit(false)
      })
  }

  return (
    <div className="header">
      {showEdit ? (
        <div>
          <section className="edit-name">
            <h1>Edit user info</h1>
            <form>
              <div className="input-wrapper">
                <label htmlFor="userName">User name:</label>
                <input
                  type="text"
                  id="username"
                  defaultValue={currentUserName}
                  onChange={(event) => setUserName(event.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="firstname">First name:</label>
                <input type="text" id="firstname" className="input-disabled" value={firstName} disabled="disabled" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastname">Last name:</label>
                <input type="text" id="lastname" className="input-disabled" value={lastName} disabled="disabled" />
              </div>
              <div className="edit-name-button">
                <button className="save-button" type="submit" onClick={handleSubmit}>
                  Save
                </button>
                <button className="cancel-button" onClick={close}>
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </div>
      ) : (
        <div>
          <h1>Welcome back<br />{currentUserName}</h1>
          <button className="edit-button" onClick={open}>Edit Name</button>
        </div>
      )}
    </div>
  )
}

export default EditName