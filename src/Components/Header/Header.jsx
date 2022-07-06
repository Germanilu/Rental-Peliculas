import React from 'react';

import './Header.scss';

import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//Importo userData y logOut del userSlice
import {userData, logOut} from '../../Containers/User/userSlice'


const Header = () => {

    //Importo credenciales de userSlice
    const credenciales = useSelector(userData)
    
    let navegador = useNavigate();
    const dispatch = useDispatch()


    const viajar = (destino) => {
        navegador(destino)
    };
    

    const cambiarA = (endpoint) => {
        navegador(endpoint)
    }

    if(!credenciales?.user_role) {
        return(

            <div className="headerDesign">
                <h1 className='headerTitle' onClick={() => cambiarA('/')}>El Rincon de la Pelicula</h1>
                <div className="headerButtonContainer">
                    <div className="headerButton" onClick={() => cambiarA('/login')}>Login</div>
                    <div className="headerButton" onClick={() => cambiarA('/register')}>Registrarse</div>
                </div>
            </div>
        )
    }else{
        return(

            <div className="headerDesign">
                <h1 className='headerTitle' onClick={() => cambiarA('/')}>El Rincon de la Pelicula</h1>
                <div className="headerButtonContainer">
                    <div className="headerButton" onClick={() => viajar('/movie')}>MovieDB</div>
                    <div className="headerButton" onClick={() => viajar('/profile')}>Profile</div>
                    <div className="headerButton" onClick={() => dispatch(logOut())}>Logout</div>
                </div>
            </div>
        )
    }
    
    
}

export default Header