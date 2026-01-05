
import { useState, useEffect } from 'react'

export interface WeatherData {
  temp: number
  code: number
}

interface UseWeatherReturn {
  weather: WeatherData | null
  loading: boolean
  error: boolean
}

export function useWeather(): UseWeatherReturn {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let mounted = true
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=49.8225&longitude=19.0444&current_weather=true'
        )
        if (!res.ok) throw new Error('Weather fetch failed')
        const data = await res.json()
        
        if (mounted && data.current_weather) {
          setWeather({
            temp: data.current_weather.temperature,
            code: data.current_weather.weathercode,
          })
          setError(false)
        }
      } catch (e) {
        if (mounted) {
          console.warn('Weather widget unavailable')
          setError(true)
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    fetchWeather()

    return () => {
      mounted = false
    }
  }, [])

  return { weather, loading, error }
}
