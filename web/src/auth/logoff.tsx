import React from 'react';
import { Redirect } from 'react-router-dom';

function Logoff () {
    localStorage.removeItem('token');
    localStorage.removeItem('auth');
    return (
        <Redirect to='/'/>
    )
}

export default Logoff;