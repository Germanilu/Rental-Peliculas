import React, { useEffect, useState } from 'react';
import './Profile.scss';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import {userData} from '../User/userSlice'
import '../../Components/EditProfile/EditProfile'
import { useNavigate } from 'react-router-dom';


const Profile = () => {
     
    //Creo la variable que lee de Redux los datos de usuario
    const datosUsuario = useSelector(userData)
    const navigate = useNavigate();
    //hooks
  

    

    useEffect(() => {
     
    },[])

    useEffect(() => {
        if(datosUsuario.token === ""){
            navigate("/");
        }
    })


    return (
         <div className='profileDesign'>
            <div className="profileContainer">
                <div className="profileData">
                <div className="containerName">Nombre: {datosUsuario.user_name} {datosUsuario.user_surname}</div>
                    <div className="containerEmail">Email: {datosUsuario.user_email}</div>
                    <div className="containerStreet">Dirección: {datosUsuario.user_address} {datosUsuario.user_city}</div>
                    <div className="containerMobile">Telefono: {datosUsuario.user_mobile}</div>
                    <div className="containerAge">Edad: {datosUsuario.user_age}</div>
                    <div className="button" onClick={() => navigate('/edit-profile')}>Modificar</div>
                </div>
                    
            </div>

               


               
                
         </div>
     )
}
export default Profile;