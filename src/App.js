import React, { useCallback, useEffect, useState } from 'react';
import City from './components/City';
import CityForm from './components/CityForm';
import './App.css';

function App() {
  const [city, setCity] = useState('Tartu');
  const [cityData, setCityData] = useState()
  const [error, setError] = useState(null);
  const [fetched, setFetched] = useState(false);

  let key = '6b56759eba64e104adfcdaa2683cc7bf';

  const fetchCityHandler = useCallback(async () => {
    setError(null);
    setFetched(false);

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      console.log(data)
      setCityData({
        name: city,
        temp: Math.round(parseFloat(data.main.temp) - 273.15),
        description: data.weather[0].description
      });

    } catch (error) {
      setError(error.message)
    }
    
    setFetched(true)
  }, [city]);

  useEffect(() => {
    fetchCityHandler();
  }, [fetchCityHandler]);

  const changeCity = (newCity) => {
    setCity(newCity)
  }

  return (
    <React.Fragment>
      <section>
        {fetched && <City city={cityData}/>}
        <CityForm onChangeCity={changeCity} />
      </section>
    </React.Fragment>
  );
}

export default App;
