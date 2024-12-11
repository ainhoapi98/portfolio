import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weather = createApi({
  reducerPath: 'weather',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: builder => ({
    getWeatherByCity: builder.query({
      query: city =>
        `weather?q=${city}&appid=da254b694d289e718950d58e0044fa73&units=metric`,
    }),
  }),
})

export const { useGetWeatherByCityQuery } = weather
