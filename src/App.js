import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';


import { Routes, Route } from 'react-router-dom';

import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          {<CountriesList countries={countries} />}
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails countriesProp={countries.data} />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;