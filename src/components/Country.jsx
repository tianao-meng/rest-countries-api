import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../country.css";

const Country = () => {
  const [country, setCountry] = useState([]);
  const [curBorders, setCurBorders] = useState([]);
  const { name } = useParams();

  const fetchCountry = async () => {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${name}`
    );

    const curCountry = await response.json();

    const { borders } = curCountry[0];

    const fetchedBorders = [];
    borders.map(async (border) => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${border}`
      );

      const borderCountry = await response.json();
      const borderName = borderCountry.name;

      fetchedBorders.push(borderName);
      if (fetchedBorders.length === borders.length) {
        setCurBorders(fetchedBorders);
      }
    });

    setCountry(curCountry);
  };

  useEffect(() => {
    fetchCountry();
  }, [name]);

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div>
      {country.map((c) => {
        const {
          flag,
          nativeName,
          population,
          region,
          subregion,
          capital,
          topLevelDomain,
          currencies,
          languages,
          borders,
        } = c;
        return (
          <div className="details-card container">
            <button className="btn" onClick={handleClick}>
              <i className="fas fa-arrow-left"></i> Back
            </button>

            <div className="details">
              <div>
                <img src={flag} alt={name} />
              </div>
              <div className="right">
                <h2>{name}</h2>

                <div className="information">
                  <div className="information-left">
                    <p>
                      <strong>Native Name: </strong>
                      {nativeName}
                    </p>

                    <p>
                      <strong>Population: </strong>
                      {population}
                    </p>
                    <p>
                      <strong>Region: </strong>
                      {region}
                    </p>
                    <p>
                      <strong>Sub Region: </strong>
                      {subregion}
                    </p>
                    <p>
                      <strong>Capital: </strong>
                      {capital}
                    </p>
                  </div>

                  <div className="information-right">
                    <p>
                      <strong>Top Level Domain: </strong>
                      {topLevelDomain[0]}
                    </p>
                    <p>
                      <strong>Currencies: </strong>
                      {currencies[0].name}
                    </p>
                    <p>
                      <strong>Languages: </strong>
                      {languages[0].name}
                    </p>
                  </div>
                </div>
                <div className="border">
                  <ul>
                    {curBorders.map((border) => {
                      const url = `/countries/${border}`;
                      return (
                        <li>
                          <Link className="link" to={url}>
                            {border}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
