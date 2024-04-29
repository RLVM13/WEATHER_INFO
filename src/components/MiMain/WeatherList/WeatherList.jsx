import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../../assets/cargandoPulpFiction.gif'

const WeatherList = () => {

  const [city, setCity] = useState("madrid");
  const [dataWeather, setdataWeather] = useState([]);

  const [values, setValues] = useState({ title: "" }); //nuevo estado de "Values"
  
  useEffect(() => {
    async function getCity() {
      try {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
        const json = resp.data;
        setdataWeather(json.list); // Guarda en el array de ciudad el resultado. Procesa los datos
      } catch (e) {
        setdataWeather([]); //Si hay error, no pintas nada
      }
    }
    getCity(); //llamamos a la funcion que conecta y traer datos
  }, [city]); //Valor de la ciudad por defecto

  const handleSubmit = e => {
    e.preventDefault();
    const title = e.target.ciudad.value; // e.target.elements.title.value;
    const item = { title }; //Nuevo objeto
    setCity(e.target.ciudad.value); //Añade la ciudad a la lista
    console.log("********");
    console.log(item);
    console.log(city);
  }

  const handleChange = (e) => { /* Conserva el objeto que tengas y usa el valor que cambie */
    console.log(e.target.name, e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className='ciudad'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="ciudad" placeholder="Escribe una ciudad" onChange={handleChange} />
        <br />
        {values.ciudad ? //Si se rellena, aparece boton
          <button type="submit">Previsión</button>
          : <></>} {/* otra forma de indicar null */}
      </form>

        {dataWeather.length != 0 ?
        <ul classname='tiempo'>
          {dataWeather.map(weather => (
            <li key={weather.id}>{weather.title}
            <p>Ésta es la previsión de : {values.ciudad}</p>
              <p>Temperature : {weather.main.temp}</p>
              <p>Wind : {weather.wind.speed}</p>
              <p>Date : {weather.dt_txt}</p><br />
            </li>
          ))}
          </ul>
          : <img src={Loading} className="loading" alt="Loading logo" />}
    </section>
  );
}

export default WeatherList