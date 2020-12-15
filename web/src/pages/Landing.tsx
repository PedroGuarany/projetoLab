import React from 'react';

import LoginDialog from '../components/loginButton';
import loginImage from '../images/loginImage.png';
import '../styles/partials/landing.css';



function Landing () {

    return (
        <div id='pageLanding'>
            <div className="topBar">
                <a href="/duvidas">
                    DÚVIDAS
                </a>

                <a href="/about">
                    SOBRE NÓS
                </a>
            </div>

            <div className="loginDiv">
                <img src={loginImage} alt=""/>

                <div className="textWrapper">
                    <h2>RESERVATECH</h2>
                    <p>Estamos aqui para facilitar a reserva dos equipamentos</p>
                    <LoginDialog/>
                </div>
            </div>
            
        </div>
    );
}

export default Landing;