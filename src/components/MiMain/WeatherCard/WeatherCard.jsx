import React, { useEffect, useState } from 'react';
import Loading from '../../../assets/cargandoPulpFiction.gif'

const WeatherCard = () => {

  const [city, setCity] = useState([]);
  const city_name = 'madrid';

  useEffect(() => {
    const getCity = async () => {
      const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${import.meta.env.VITE_API_KEY}`);
      const data = await resp.json();
      setCity(data);
    }
    getCity();
  }, []); // Se ejecuta la primera vez que se renderiza el componente

  return (
    <ul>
      {city.length != 0 ?
        city.list.map((weather, i) => (
          <li key={i}>
            <p>City : {city.city.name}</p>
            <p>Temperature : {weather.main.temp}</p>
            <p>Fecha : {weather.dt_txt}</p><br />
          </li>
        ))
        : <img src={Loading} className="loading" alt="Loading logo" />}
        
    </ul>
  );
}

export default WeatherCard