import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function CountriesList(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(props.countries);
  }, [props.countries]);

  return (
    <div>
      <div>
        {countries.map((country) => {
          return (
            <div
              key={country.alpha3Code}>
              <h3>
                <Link to={`/${country.alpha3Code}`}>
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt="flag"/>
                <br/>
                    {country.name.common}
                </Link>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;