import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';


import { Routes, Route } from 'react-router-dom';

import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {<CountriesList countries={countries} />}
          <Routes>
            <Route path="/:countryId" element={<CountryDetails countries={countries} />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;