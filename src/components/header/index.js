import React from 'react';
import facebookLogo from '../../assets/logo-facebook.png';

import './styles.css'

function Header() {
  return (
    <header id="main-header">
      <div className="content">
        <div>
          <img src={facebookLogo} alt="Logo Facebook"/>
          <input value="Pesquisar"></input>
        </div>
        <nav className="side">
          <ul>
            <li>Gabriel Aguiar</li>
            <img src="https://avatars2.githubusercontent.com/u/56986235?s=460&v=4" alt="profile"/>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;