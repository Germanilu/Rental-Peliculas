import React from 'react';
import './Login.scss';
/* import {useNavigate} from 'react-router-dom'; */

const Login = () => {
    return (

        

        <div className='contenedor-login'>
            
            <div className='formulario-login'>
                <input className='inputLogin'type='email' name='email' title='email' placeholder='Escribe tu Email' />
                <input className='inputLogin'type='password' name='password' title='password' placeholder='Contraseña' />
                <div className="loginButton" onClick="">Login</div>
            </div>
        </div>
    )
}

export default Login;
