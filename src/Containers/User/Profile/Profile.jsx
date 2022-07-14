import React, { useEffect, useState } from 'react';
import './Profile.scss';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import {userData} from '../userSlice'
import '../../../Components/EditProfile/EditProfile'
import { useNavigate } from 'react-router-dom';


const Profile = () => {
     
    //Creo la variable que lee de Redux los datos de usuario
    const datosUsuario = useSelector(userData)
    const navigate = useNavigate();
    
    //hooks
    
    useEffect(() => {
        
    },[])

    useEffect(() => {
        console.log("me actualize",datosUsuario)
        if(datosUsuario.token === ""){
            navigate("/");
        }
    })





    return (
         <div className='profileDesign'>
            <div className="profileContainer">
                <div className="profileData">
                <div className="containerName"><b>Nombre:</b> {datosUsuario.user_name} {datosUsuario.user_surname}</div>
                    <div className="containerEmail"><b>Email:</b> {datosUsuario.user_email}</div>
                    <div className="containerStreet"><b>Dirección:</b> {datosUsuario.user_address} {datosUsuario.user_city}</div>
                    <div className="containerMobile"><b>Telefono:</b> {datosUsuario.user_mobile}</div>
                    <div className="containerAge"><b>Edad:</b>  {datosUsuario.user_age}</div>
                    
                </div>
                <div className="button" onClick={() => navigate('/edit-profile')}>Modificar</div>  
                
            </div>
         </div>
     )
}
export default Profile;