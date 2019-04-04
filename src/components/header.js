import React from 'react';
import Logo from '../resources/images/github2.png';
import Search from './search';

function Header(props) {
    return (
        <header class="header">
            <div class="header__logo-box">
                <img src={Logo} alt="Logo" class="header__logo" />
            </div>
            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Github</span>
                    <span class="heading-primary--sub">Busque aqui o usuário</span>                               
                </h1>
                <Search />
            </div>
        </header>
    )
}

export default Header;