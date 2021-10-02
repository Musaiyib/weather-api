import React, { useState } from 'react'
import './body.scss'
import axios from 'axios'

const Body = () => {
    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('')
    const [location, setLocation] = useState('')
    const apiKey = '46ad2ca686c64b97ba3234458212909'

    const apiCall = async (e) => {
            e.preventDefault();

            const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`
            const req = axios.get(url)
            const res = await req

            setWeather({
                descp: res.data.current,
                imgSrc: res.data.current.condition.icon,
                weathText: res.data.current.condition.text,
                humidity: res.data.current.humidity,
                temp: Math.round(res.data.current.temp_c),
                windDir: res.data.current.wind_dir,
                windDegree: res.data.current.wind_degree
            })
            setLocation(city)

            // console.log(req)
            console.log(res.data.current)
            // console.log(weather.humidity)
            setCity('')
            console.log(city)
    }
        
    const weatherInfo = (
        <div className="weatherInfo">
            <p className="location">Location: {location}</p>
            <p className="weatherTemp">{weather.temp}°C</p>
            <div className="tempData">
                <p>Humidity: {weather.humidity}</p>
                <p>Wind Direction: {weather.windDir}</p>
                <p>Wind Degree: {weather.windDegree}°</p>
            </div>
            <img src={weather.imgSrc} alt="weatherIcon" className="img" />
            <p className="weatherDescr">{weather.weathText}</p>
        </div>
    )

    return (
        <div className='appBody' >
            <form onSubmit={apiCall}>
                <input
                    type="text"
                    placeholder="Enter City"
                    id="input"
                    onChange={e => setCity(e.target.value)}
                    autoComplete="off"
                    required
                />
                <button type="submit">Search</button>
            </form>
            {weather && weatherInfo}
        </div>
    )
}

export default Body
