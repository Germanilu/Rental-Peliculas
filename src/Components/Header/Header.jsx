import React, {useState} from 'react';

import './Header.scss';

import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//Importo userData y logOut del userSlice
import {userData, logOut} from '../../Containers/User/userSlice'
import Profile from '../../Containers/Profile/Profile'

const Header = () => {

    //Importo credenciales de userSlice
    const credenciales = useSelector(userData)
    
    let navegador = useNavigate();
    const dispatch = useDispatch()


    const [show, setShow] = useState(false);

 

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
                    <div className="headerButton" onClick={() => cambiarA('/movie')}>MovieDB</div>
                    <div className="headerButton" onClick={() => setShow(!show)}>Profile</div>
                    <div className="headerButton" onClick={() => dispatch(logOut())}>Logout</div>
                </div>
                {show ? <Profile/> : null}
                
            </div>
        )
    }
    
    
}

export default Header