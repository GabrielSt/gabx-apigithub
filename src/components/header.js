import React from 'react';
import Logo from '../resources/images/github2.png';
import Search from './search';

function Header(props) {
    return (
        <header className="header">
            <div className="header__logo-box">
                <img src={Logo} alt="Logo" className="header__logo" />
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Github</span>
                    <span className="heading-primary--sub">Busque aqui o usuário</span>                               
                </h1>
                <Search />
            </div>
        </header>
    )
}

export default Header;