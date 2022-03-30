import { useState } from "react";
import countries from "./countriesAll.json";
import "./App.css";
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const RenderCountries = (prop) => {
  return prop.countries.map((country, index) => {
    return (
      <div key={index} className="singleCountry">
        <img alt={country.name} src={country.flag}></img>
        <h3>{country.name}</h3>
        <p>Population: {formatNumber(country.population)}</p>
        <p>Region: {country.region}</p>
        <p>Capital:{country.capital} </p>
      </div>
    );
  });
};

function App() {
  const filterCountries = (typedValue) => {
    return countries.filter((country) => {
      return (
        country.name.toLowerCase().includes(typedValue.toLowerCase()) ||
        country.capital?.toLowerCase().includes(typedValue.toLowerCase())
      );
    });
  };

  const [arrayOfCountries, setArrayOfCountries] = useState(countries);
  return (
    <div className="App">
      <p>
        Search:
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value, filterCountries(e.target.value));
            setArrayOfCountries(filterCountries(e.target.value));
          }}
        ></input>
      </p>

      <div className="app-body">
        <RenderCountries countries={arrayOfCountries} />
      </div>
    </div>
  );
}

export default App;
