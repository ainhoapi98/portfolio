import { configureStore } from '@reduxjs/toolkit'
import { weather } from 'api/weather'

export const store = configureStore({
  reducer: {
    [weather.reducerPath]: weather.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(weather.middleware),
})
