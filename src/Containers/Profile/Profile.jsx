import React, { useState } from 'react';
import './Profile.scss';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import {updateUser, userData} from '../User/userSlice'




const Profile = () => {
     
    //Creo la variable que lee de Redux los datos de usuario
    const datosUsuario = useSelector(userData)
   
    //hooks
    const [hideContainer, setHideContainer] = useState(true);


  
    
    return (
         <div className='profileDesign'>
           
            <div className="profileContainer">
            
                <div className="profileData">
                <div className="containerName">Nombre: {datosUsuario.user_name} {datosUsuario.user_surname}</div>
                    <div className="containerEmail">Email: {datosUsuario.user_email}</div>
                    <div className="containerStreet">Dirección: {datosUsuario.user_address} {datosUsuario.user_city}</div>
                    <div className="containerMobile">Telefono: {datosUsuario.user_mobile}</div>
                    <div className="containerAge">Edad: {datosUsuario.user_age}</div>
                </div>
                    <div className="button" onClick={() => setHideContainer(false)}>Modificar</div>
            </div>
                {
                hideContainer ? <div className='hide'>Estoy Escondido</div>  : <div className='show'>Estoy visible <div onClick={() => setHideContainer(true)}>hola que tal</div> </div>

                
                
                
                }
         </div>
     )
}
export default Profile;