import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../features/auth/authSlice'
import ProfileSlice from '../features/profile/profileSlice'

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    profile: ProfileSlice
  },
})