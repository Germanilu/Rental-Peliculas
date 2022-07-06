import React from 'react';

import './Header.scss';

import {useNavigate} from 'react-router-dom';


const Header = () => {
    
    let navegador = useNavigate();

    const cambiarA = (endpoint) => {
        navegador(endpoint)
    }
    
    return(

        <div className="headerDesign">
            <h1 className='headerTitle' onClick={() => cambiarA('/')}>El Rincon de la Pelicula</h1>
            <div className="headerButtonContainer">
                <div className="headerButton" onClick={() => cambiarA('/login')}>Login</div>
                <div className="headerButton" onClick={() => cambiarA('/register')}>Registrarse</div>
            </div>
        </div>
    )
}

export default Header