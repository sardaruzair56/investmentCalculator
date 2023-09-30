import React from 'react';
import logo from '../../assets/investment-calculator-logo.png';
import cssFile from './header.module.css';



const header=()=> {
  return (
    <div>
        <header className={cssFile.header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

    </div>
  )
}

export default header
