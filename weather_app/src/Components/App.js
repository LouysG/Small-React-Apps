import '../App.css';
import { useState } from 'react';
import InputBar from './InputBar';
import DisplayPane from './DisplayPane';
import Clear from '../Resources/clear.jpg';
import Clouds from '../Resources/clouds.jpg';
import Lightning from '../Resources/Lightning.jpg';
import Fog from '../Resources/fog.jpg';
import Rain from '../Resources/rain.jpg';
import Snow from '../Resources/snow.jpg';



function App() {
  const openWeatherKey = ''
  const geoCodeUrl = 'http://api.openweathermap.org/geo/1.0/direct'
  const forecastUrl ='https://api.openweathermap.org/data/2.5/onecall'
  const [forecast, setForecast] = useState({
    city: undefined,
    temp: undefined,
    high: undefined,
    low: undefined,
    type: undefined,
})

  function handleSearch (e) {
    const searchInput = document.getElementById('bar').value
    getForecast(searchInput)
    e.preventDefault()
    document.getElementById('bar').value = ''
  }

  async function getForecast (city) {
    let lat
    let lon
    
    // Convert city name to lat/lon coordinates
    try {
      const geoCodeEndpoint = `${geoCodeUrl}?q=${city}&limit=1&appid=${openWeatherKey}`
      const response = await fetch(geoCodeEndpoint)
      if (response.ok) {
        const jsonResponse = await response.json()
        lat = jsonResponse[0].lat
        lon = jsonResponse[0].lon
      }
    } catch (error) {
      console.log(error)
    }

    // Get current forecast for lat/lon coordinates
    try {
      const forecastEndpoint = `${forecastUrl}?lat=${lat}&lon=${lon}&appid=${openWeatherKey}`
      const response = await fetch(forecastEndpoint)
      console.log(response)
      if (response.ok) {
        const jsonResponse = await response.json()
        console.log(jsonResponse)
        setForecast({
          ...forecast,
          city: city,
          temp: kelvinToFahrenheit(jsonResponse.current.temp),
          high: kelvinToFahrenheit(jsonResponse.daily[0].temp.max),
          low: kelvinToFahrenheit(jsonResponse.daily[0].temp.min),
          type: jsonResponse.current.weather[0].id
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  function kelvinToFahrenheit (kelvinTemp) {
    return Math.round((((kelvinTemp - 273.15) * 9) / 5) + 32)
  }

  // Set background
  const root = document.getElementById('root')
  if (forecast.type > 800) {
    root.style.backgroundImage = `url(${Clouds})`
  } else if (forecast.type === 800) {
    root.style.backgroundImage = `url(${Clear})`
  } else if (forecast.type >= 700 && forecast.type < 800) {
    root.style.backgroundImage = `url(${Fog})`
  } else if (forecast.type >= 600 && forecast.type < 700) {
    root.style.backgroundImage = `url(${Snow})`
  } else if (forecast.type >= 300 && forecast.type < 600) {
    root.style.backgroundImage = `url(${Rain})`
  } else if (forecast.type >= 200 && forecast.type < 300) {
    root.style.backgroundImage = `url(${Lightning})`
  }
  


  return (
    <>
      <InputBar handleSearch={handleSearch} />
      <DisplayPane forecast={forecast} />
    </>
  )
}

export default App;
