import React, { useEffect, useState } from 'react';
import { updateUser, userData } from '../../Containers/User/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import './EditProfile.scss'
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {

    const datosUsuario = useSelector(userData)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    
 

    //Hooks

    const [perfilUsuario, setPerfilUsuario] = useState({
        user_name: datosUsuario.user_name,
        user_surname: datosUsuario.user_surname,
        user_email: datosUsuario.user_email,
        user_address: datosUsuario.user_address,
        user_city: datosUsuario.user_city,
        user_mobile: datosUsuario.user_mobile,
        user_token: datosUsuario.user_token,
        user_password: datosUsuario.user_password,  
        user_password: ""
         
    })


    

    const [msgError, setMsgError] = useState("")


    

    const handlerInputs = (e) => {
        console.log(e.target.value)
        setPerfilUsuario({...perfilUsuario, [e.target.name]: e.target.value})
        console.log("Soy el perfilUsuario",perfilUsuario)
        console.log("soy datosUsuario", datosUsuario)
    }

    const editDetails = () => {
        if(perfilUsuario.user_password == "" ){
            setMsgError("Tienes que introducir la contraseña")
        }else if(perfilUsuario.user_password !== perfilUsuario.user_password2){
            setMsgError("Los dos password no coinciden")
        }else{
            dispatch(updateUser(datosUsuario,perfilUsuario),
        navigate('/'))
        } 
    }


    useEffect(() => {

    },[])

    useEffect(() => {
        if(datosUsuario.token === ""){
            navigate('/')
        }
    })


    return (

        <div className='editProfileDesign'>
            <div className="editProfileDesignContainer">
                <h3 className='titleEditProfile'>Mis Datos personales</h3>
            <input className='input' value={perfilUsuario.user_name} type='text' name='user_name' title='name' disabled onChange={handlerInputs} lenght='30' />
            <input className='input' value={perfilUsuario.user_surname} type='text' name='user_surname' title='surname' disabled onChange={handlerInputs} lenght='30' />
            <input className='input' value={perfilUsuario.user_email} type='text' name='user_email' title='email' onChange={handlerInputs} lenght='30' />
            <input className='input' value={perfilUsuario.user_address} type='text' name='user_address' title='address' onChange={handlerInputs} lenght='30' />
            <input className='input' value={perfilUsuario.user_city} type='text' name='user_city' title='city' onChange={handlerInputs} lenght='30' />
            <input className='input' value={perfilUsuario.user_mobile} type='text' name='user_mobile' title='mobile' onChange={handlerInputs} lenght='30' />
            <input className='input' value={perfilUsuario.user_password} type='password' name='user_password' title='password' onChange={handlerInputs} lenght='30' />
            <input className='input' value={perfilUsuario.user_password2} type='password' name='user_password2' title='password2' onChange={handlerInputs}/>
            
            <div>{msgError}</div>
            <div className="buttonContainer">
            <div className="buttonEditProfile" onClick={()=>editDetails() }>Guardar</div>
            <div className="buttonEditProfile" onClick={() => navigate('/')}>Cerrar</div>
            </div>
            </div>
        </div>

    )
}

export default EditProfile;