import { configureStore } from '@reduxjs/toolkit'
import  Counter  from '../CounterSlice'

export default configureStore({
  reducer: {
    superman:Counter,
  },
});