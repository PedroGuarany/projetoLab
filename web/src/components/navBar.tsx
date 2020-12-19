import React from 'react';

import logo from '../images/logo.png';

function TopBar() {
    return (
        <div id='topBar'>
            <div className="logo">
                <img src={logo} alt=""/>
                <span>RESERVATECH</span>
            </div>

            <a href="/duvidas">
                DÚVIDAS
            </a>

            <a href="/about">
                SOBRE NÓS
            </a>
        </div>
    )
}

export default TopBar;