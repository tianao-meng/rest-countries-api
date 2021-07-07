import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const res = await fetch(url);
    const countries = await res.json();
    setCountries(countries);
  };

  return (
    <div className="container grid">
      {countries.map((country) => {
        const { population, name, region, capital, flag } = country;
        return (
          <div className="card">
            <Link to={`/countries/${name}`}>
              <img src={flag} alt={name} />
            </Link>

            <div className="information">
              <h3 className="name">{name}</h3>
              <p>
                <strong>Population:</strong> {population}
              </p>
              <p>
                <strong>Region:</strong>{" "}
                <span className="region">{region}</span>
              </p>
              <p>
                <strong>Capital:</strong> <span>{capital}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
