import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firstName: null,
  lastName: null,
  userName: null,
}

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers : {
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    updateUserName: (state, action) => {
      state.userName = action.payload
    }
  },
})

export const { setFirstName, setLastName, updateUserName } = ProfileSlice.actions

export default ProfileSlice.reducer

export const selectCurrentFirstName = state => state.profile.firstName
export const selectCurrentLastName = state => state.profile.lastName
export const selectCurrentUserName = state => state.profile.userName
