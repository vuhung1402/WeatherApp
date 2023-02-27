import './App.css';
import { useState } from 'react';
import {imgClear , imgCloud, imgMist, imgSnow, imgRain} from './images'
import Invalid from './Invalid'
// import imgSnow from './images/snow.png'
// import imgClear from './images/clear.png'
// import imgCloud from './images/cloud.png'
// import imgRain from './images/rain.png'
// import imgMist from './images/mist.png'

function App() {
  const apiKey = "bdf8aa2d45554fa833631a0336909560"
  const [weatherData, setWeatherData] = useState({})
  const [city, setCity] = useState("")

  const getWeather = (e) => {
      if(e.key === "Enter"){
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
              .then( response => response.json() )
              .then( data => {setWeatherData(data) 
              setCity("")} )
      }
  }

    return (
      <div className="flex flex-col items-center mt-[5px] bg-[#06283D]">
          <div className='w-[400px] bg-white flex items-center flex-col rounded'>
              <div className='w-full h-[50px] px-[10px] flex items-center'>
                  <i className='fa-solid fa-location-dot'></i>
                  <input  
                    className='ml-[10px] h-full w-[90%] pl-[10px] rounded outline-none'
                    value={city}
                    placeholder='Enter city'
                    onChange={ e => setCity(e.target.value) }
                    onKeyDown = {getWeather}
                  />
                <i className='fa-solid fa-magnifying-glass'></i>
              </div>

              {typeof weatherData.main === 'undefined' ? (
              (weatherData.cod === '404' && <Invalid/> ) || (<div> Welcome to weather app! Enter an city </div>)
          ): (
            <div>
                <div>
                    {   (weatherData.weather[0].main ==='Clear' && <img className='w-full h-[340px]' 
                        src={imgClear} />) ||
                        (weatherData.weather[0].main ==='Snow' && <img className='w-full h-[340px]' 
                        src={imgSnow} />) ||
                        (weatherData.weather[0].main ==='Mist' && <img className='w-full h-[340px]' 
                        src={imgMist} />) ||
                        (weatherData.weather[0].main ==='Rain' && <img className='w-full h-[340px]' 
                        src={imgRain} />) || 
                        (weatherData.weather[0].main ==='Clouds' && <img className='w-full h-[340px]' 
                        src={imgCloud} />)
                    }
                    <p className='font-medium mt-[5px] text-center text-2xl'>{weatherData.name}</p>
                    <p className='font-medium mt-[5px] text-center text-2xl'>{weatherData.main.temp} °F</p>
                    <p className='font-medium mt-[5px] text-center text-2xl'>{weatherData.weather[0].main}</p>
                </div>
                <div className='flex justify-between mt-[10px] mx-[20px] pb-[10px]'>
                    <div className='flex items-center'>
                        <i className='fa-solid fa-water'></i>
                        <div className='pl-[10px]'>
                            <p className=' font-medium'>{weatherData.main.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <i className='fa-solid fa-wind mr-[10px]'></i>
                        <div>
                            <p className=' font-medium'>{weatherData.wind.speed}Km/h </p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
          )
          }
          </div>
      </div>
    )
}
  

export default App;
