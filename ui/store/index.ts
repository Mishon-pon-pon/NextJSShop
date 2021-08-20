import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Basket'
import goodsReducer from './Goods'

const store = configureStore({
  reducer: {
      counter: counterReducer,
      goods: goodsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store