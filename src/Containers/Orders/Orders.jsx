import axios from 'axios';
import './Orders.scss'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import {userData} from '../../Containers/User/userSlice'
const Orders = () => {


    const credenciales = useSelector(userData)
    const navigate = useNavigate();
 


    //Hooks
    const [msgError, setMsgError] = useState([])

    
    useEffect(() => {
        showMovieRent()
    },[])

    useEffect (() => {
        
        if(credenciales.token === ""){
            navigate("/");
        }
    })

    const showMovieRent = async () => {
        try {
            let config = {
                headers: {Authorization: `Bearer ${credenciales.token}`}
            };

           let resultado = await axios.get(`https://buscadordepeliculas.herokuapp.com/api/order/user=${credenciales.user_id}`,config)
           setMsgError([resultado.data.data])
    
           console.log("soy x" + msgError)
        } catch (error) {
            setMsgError(error.message)
            console.log("soy el catch",error)
        }
    }


     return (
         <div className='designOrders'>
            
         {
            msgError.map((data) => {
                console.log(data)
                return(
                    <div className="designOrderDetail">
                        <div className="designImg">imagen aqui</div>
                        <div className="designInfoOrders">
                            <div className="orderName">{data.movieName}</div>
                            <div className="orderDate">{data.orderDate}</div>
                            <div className="orderReturn">{data.returnDate}</div>
                            <div className="orderButton">Devolver Pelicula</div>
                        </div>
                    </div>
                    
                )
            })
         }
         
         </div>

         
     )
}
export default Orders;