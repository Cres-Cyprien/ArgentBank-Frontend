import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  token: null,
  firstName: null,
  lastName: null,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers : {
    setAccessToken: (state, action) => {
      state.token = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    setUserName: (state, action) => {
      state.userName = action.payload
    },
    logOut: (state) => {
      state.user = null
      state.token = null
    }
  },
})

export const { setAccessToken, setUser, setFirstName, setLastName, setUserName, logOut } = AuthSlice.actions

export default AuthSlice.reducer

export const selectCurrentToken = state => state.auth.token
export const selectCurrentUser = state => state.auth.user
export const selectCurrentFirstName = state => state.auth.firstName
export const selectCurrentUserName = state => state.auth.userName