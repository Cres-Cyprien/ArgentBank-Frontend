import { useDispatch, useSelector } from "react-redux"
import { selectCurrentFirstName, selectCurrentLastName, updateUserName, selectCurrentUserName } from "../profileSlice"
import { useState } from "react"
import { selectCurrentToken } from "../../auth/authSlice"
const PROFILE_URL = 'http://localhost:3001/api/v1/user/profile'
import "./EditName.scss"



function EditName() {
  const firstName = useSelector(selectCurrentFirstName)
  const lastName = useSelector(selectCurrentLastName)
  const [userName, setUserName] = useState("")
  const token = useSelector(selectCurrentToken)
  const [showEdit, setShowEdit] = useState("")
  const dispatch = useDispatch()
  const open = () => setShowEdit(true)
  const close = () => setShowEdit(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(PROFILE_URL, {
      method: "PUT",
      headers: {
        "Accept": "application/json",  
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({userName})
    })
    if (response.ok) {
      const data = await response.json()
      const username = data.body.userName
      console.log(data)
      dispatch(updateUserName(username))
      setShowEdit(false)
    }
  }

  return(
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
                defaultValue={selectCurrentUserName}
                onChange={(event) => setUserName(event.target.value)}
                />
            </div>
            <div className="input-wrapper">
              <label htmlFor="firstname">First name:</label>
              <input type="text" id="firstname" className="input-disabled" value={firstName} disabled="disabled"/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastname">Last name:</label>
              <input type="text" id="lastname" className="input-disabled" value={lastName} disabled="disabled"/>
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
        <h1>Welcome back<br />{userName}</h1>
        <button className="edit-button" onClick={open}>Edit Name</button>
      </div>
    )}
  </div>
  )
}

export default EditName