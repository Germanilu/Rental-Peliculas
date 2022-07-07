import React, { useState } from 'react';
import { userData } from '../../Containers/User/userSlice';
import { useSelector } from 'react-redux';
import './EditProfile.scss'


const EditProfile = () => {

    const datosUsuario = useSelector(userData)


    //Hooks

    const [perfilUsuario, setPerfilUsuario] = useState({
        user_name: datosUsuario.user_name,
        user_surnname: datosUsuario.user_surnname,
        user_email: datosUsuario.user_email,
        user_address: datosUsuario.user_address,
        user_city: datosUsuario.user_city,
        user_mobile: datosUsuario.user_mobile
    })


    const handlerInputs = () => {

    }



    return (
        <div className='editProfileDesign'>
            <input className='input' value={perfilUsuario.user_name} type='text' name='user_name' title='name' onChange={handlerInputs} lenght='30' />
            <input className='input' value={perfilUsuario.user_surname} type='text' name='user_surname' title='surname' onChange={handlerInputs} lenght='30' />
            <input className='input' value={perfilUsuario.user_email} type='text' name='user_email' title='email' onChange={handlerInputs} lenght='30' />
            <input className='input' value={perfilUsuario.user_address} type='text' name='user_address' title='address' onChange={handlerInputs} lenght='30' />
            <input className='input' value={perfilUsuario.user_city} type='text' name='user_city' title='city' onChange={handlerInputs} lenght='30' />
            <input className='input' value={perfilUsuario.user_mobile} type='text' name='user_mobile' title='mobile' onChange={handlerInputs} lenght='30' />

        </div>

    )
}

export default EditProfile;