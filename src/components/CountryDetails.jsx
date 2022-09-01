import React from 'react'
import { useParams } from 'react-router-dom';

function CountryDetails(props) {
    console.log(props.countries);
    const { countryId } = useParams();
    console.log(countryId);
    const country = props.countries.find((i) => i.alpha2Code === countryId);
    console.log(country);

    return (
        <div className='country-details'>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag'/>
            <h1>{country.name.official}</h1>
            <p>Capital: {country.capital}</p>
        </div>  
    )
}

export default CountryDetails