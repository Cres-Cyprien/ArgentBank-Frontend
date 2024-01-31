import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  token: null,
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
    logOut: (state) => {
      state.user = null
      state.token = null
    }
  },
})

export const { setAccessToken, setUser, logOut } = AuthSlice.actions

export default AuthSlice.reducer

export const selectCurrentToken = state => state.auth.token
export const selectCurrentUser = state => state.auth.user