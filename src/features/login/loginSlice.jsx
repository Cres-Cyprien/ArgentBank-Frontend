import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  token: null,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers : {
    accessToken: (state, action) => {
      state.token = action.payload
    },
    user: (state, action) => {
      state.user = action.payload
    },
    logOut: (state, action) => {
      state.user = null
      state.user = null
    }
  },
})

export const { accessToken, user, logOut } = loginSlice.actions

export default loginSlice.reducer