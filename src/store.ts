import { configureStore } from '@reduxjs/toolkit'

import userReducer from './storeSlices/userSlice'

const store =  configureStore({
  reducer: {
    user: userReducer
  }
})

export default store