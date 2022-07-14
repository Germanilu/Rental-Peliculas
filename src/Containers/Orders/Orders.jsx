import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import {userData} from '../../Containers/User/userSlice'
const Orders = () => {


    const datosUsuario = useSelector(userData)
    const navigate = useNavigate();

    useEffect(() => {
        
    },[])

    useEffect(() => {
        console.log("me actualize",datosUsuario)
        if(datosUsuario.token === ""){
            navigate("/");
        }
    })


     return (
         <div className='designOrders'>Orders</div>
     )
}
export default Orders;