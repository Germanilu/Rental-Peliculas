import axios from 'axios';
import './Orders.scss'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { userData } from '../../Containers/User/userSlice'
const Orders = () => {

    const credenciales = useSelector(userData)
    const navigate = useNavigate();



    //Hooks
    const [showOrder, setShowOrder] = useState([])
    const [msgError, setMsgError] = useState([])


    useEffect(() => {
        showMovieRent()
    }, [])

    useEffect(() => {

        if (credenciales.token === "") {
            navigate("/");
        }
    })

    const showMovieRent = async () => {
        try {
            let config = {
                headers: { Authorization: `Bearer ${credenciales.token}` }
            };

            let resultado = await axios.get(`https://buscadordepeliculas.herokuapp.com/api/order/user=${credenciales.user_id}`, config)
            setShowOrder([resultado.data.data])

        } catch (error) {
            setMsgError("De momento no tienes ninguna pelicula alquilada")

        }
    }

    const devolverPelicula = async () => {

        let config = {
            headers: { Authorization: `Bearer ${credenciales.token}` }
        }


        await axios.delete(`https://buscadordepeliculas.herokuapp.com/api/order/delete=${showOrder[0]._id}`, config)

        navigate("/")
    }


    return (
        <div className='designOrders'>

            {showOrder &&
                showOrder.map((data) => {
                    // console.log(data)
                    return (
                        <div className="designOrderDetail">

                            <div className="designInfoOrders">
                                <div className="orderName">{data.movieName}</div><br />
                                <div className="orderDate">{data.orderDate}</div><br />
                                <div className="orderReturn">Fecha limite de devolución: {data.returnDate}</div><br />
                                <div className='containerOrderButton'>
                                    <div className="orderButton" onClick={() => devolverPelicula()}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Devolver Pelicula</div>
                                </div>
                            </div>
                            <div className="designImg">
                                <img className='designOrderImg' src={data.movieImg} alt={data.movieName} />
                            </div>
                        </div>

                    )
                })
            }

            {/* Si el usuario no tiene ninguna pelicula alquilada */}
            <div className='noMovieRent'>{msgError}</div>

        </div>


    )
}
export default Orders;