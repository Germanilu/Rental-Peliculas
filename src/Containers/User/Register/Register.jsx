import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Register.scss';


const Register = (props) => {

    //HOOK con los datos a rellenar

    const [userDades, setUserDades] = useState({
        name: '',
        surname: '',
        email: '',
        mobile: '',
        city: '',
        address: '',
        password: '',
        password2: '',

    });

    const [registrado, setRegistrado] = useState('');
    const [msgError, setMsgError] = useState('');

    //variable
    let navigate = useNavigate();

    //HANDLERS

    const updateUserDades = (e) => {
        setUserDades({ ...userDades, [e.target.name]: e.target.value })
    }

    //Creamos por primera vez el componente con este useEffect.
    useEffect(() => {

    }, [])

    //Con este useEffect, cada vez que se modifica algo, se actualiza.
    useEffect(() => {

    })



    const Registrate = async () => {

        //Primero, comprobación de campos vacíos

        let datos = ['name', 'surname', 'email', 'mobile', ' address', 'password', 'password2'];

        for (let field of datos) {
            if (userDades[field] === '') {
                setMsgError(`Te ha faltado ${[field]} por rellenar`);
                return;
            }
        }
        //Con esto válidamos que el email este correctamente.
        if (!userDades.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
            setMsgError('introduce un email válido!');
            return;
        }

        //Validar telf correcto
        if (!userDades.mobile.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/)) {
            setMsgError('el telefono tiene que ser correcto!');
            return;

        }

        // Con este IF, revisamos que la password, esta escrita igual las dos veces.

        if (userDades.password !== userDades.password2) {

            setMsgError("Los dos password deben de coincidir");
            return;
        }

        //La pasword tiene que ser de un tamaño especificado, en este caso entre 6 y 10 digitos.
        if (userDades.password.length < 6 || userDades.password.length > 10) {

            setMsgError("La password tiene que ser entre 6 y 10 digitos");
            return;
        }
        //La password requiere un caracter especial.
        if (!userDades.password.match(/^(?=.*[*@!#%&()^~{}]).*$/)) {

            setMsgError("falta un caracter especial en la password ejemplo [ *@!#%&()^~{} ]");
            return;
        }




        //[TOCANDO LA PASSWORD VALIDATER]


        //enviamos los datos a la base de datos 
        let intentoRegistro = await axios.post("https://buscadordepeliculas.herokuapp.com/api/auth/register", userDades);

        //si el registro realizado es correcto, es decir es igual a un 200, nos 
        //redirigira al side Login para que te logees en la web
        if (intentoRegistro.status === 200) {

            setRegistrado(true);

            setTimeout(() => {
                navigate('/login');

            }, 2000);
        }

    }

    if (registrado === true) {

        return (
            <div className="registerDesign">
                Te has registrado correctamente {userDades.name}
            </div>
        )

    } else {
        return (
            <div className='registerDesign'>
                <div className='subRegisterDesign'>
                    <div className='divtitle'>
                        <h3>Formulario de Registro</h3>
                    </div>
                    <div className='divInputs'>
                        <div className="registerLeft">
                            <input className='bottonDesign' placeholder='name' type='text' name='name' title='name' onChange={updateUserDades} />
                            <input className='bottonDesign' placeholder='surname' type='text' name='surname' title='surname' onChange={updateUserDades} />
                            <input className='bottonDesign' placeholder='email' type='email' name='email' title='email' onChange={updateUserDades} />
                            <input className='bottonDesign' placeholder='city' type='text' name='city' title='city' onChange={updateUserDades} />
                        </div>
                        <div className="registerRight">
                            <input className='bottonDesign' placeholder='mobile' type='text' name='mobile' title='mobile' onChange={updateUserDades} />
                            <input className='bottonDesign' placeholder='address' type='text' name='address' title='address' onChange={updateUserDades} />
                            <input className='bottonDesign' placeholder='password' type='password' name='password' title='password' onChange={updateUserDades} />
                            <input className="bottonDesign" placeholder='password2' type='password' name='password2' title='password2' onChange={updateUserDades} />
                            
                        </div>

                    </div>
                    <div className="designMessageError">
                                {msgError}
                            </div>
                    <div className='divBotton'>
                        <div className="bottonDesignRegister" onClick={() => Registrate()}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            REGISTRATE
                        </div>
                    </div>

                </div>


            </div>

        )

    }
}

export default Register;