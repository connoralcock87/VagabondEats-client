import React from 'react';
import Logo from '../VE-logo.png'

const Header = () => {
  return (
    <header className="App-header">
      <div className="App-title">
        <img className='Logo' src= {Logo}/>
        <h1>Vagabond Eats</h1>
      </div>
      <div class='Tagline'>
        <p>Food trucks in an easy to consume format</p>
      </div>
    </header>
    )
}

export default Header;
