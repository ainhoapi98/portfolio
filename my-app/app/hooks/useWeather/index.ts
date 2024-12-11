import { useCallback, useState } from 'react'

import { useGetWeatherByCityQuery } from 'api/weather'

function useWeather() {
  const [city, setCity] = useState<string>('Berlin')
  const { data, error, isLoading } = useGetWeatherByCityQuery(city, {
    skip: !city, // Prevent automatic fetch if city is empty
  })

  // Custom function to trigger a search
  const fetchWeather = useCallback((newCity: string) => {
    setCity(newCity)
  }, [])

  return {
    weather: data,
    isLoading,
    error,
    fetchWeather,
  }
}

export default useWeather
