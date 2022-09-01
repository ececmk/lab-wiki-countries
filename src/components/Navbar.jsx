import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <NavLink to='/' className="navbar-brand">LAB - WikiCountries</NavLink>
        </div>
    </nav>
  )
}

export default Navbar;
