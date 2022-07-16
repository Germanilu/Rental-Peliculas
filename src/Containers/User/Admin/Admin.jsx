import React, { useState, useEffect } from 'react';
import './Admin.scss'
import axios from 'axios'
import { useSelector } from 'react-redux/es/exports';
import { userData } from '../userSlice'
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const datosUsuario = useSelector(userData)
    let navegador = useNavigate()
    
    //Hooks
    const [cambiarPantalla, setCambiarPantalla] = useState([])
    const [valorInput, setValorInput] = useState()
    const [msgError, setMsgError] = useState("")


    useEffect(() => {

    }, []);

    useEffect(() => {
        if (datosUsuario.token === "") {
            navegador('/')
        }
    });

    const buscarUsuarios = async () => {
        let config = {
            headers: { Authorization: `Bearer ${datosUsuario.token}` }
        }
        
        let resultado = await axios.get("https://buscadordepeliculas.herokuapp.com/api/users/", config)
        setCambiarPantalla(resultado.data.data)
        // console.log(resultado)
    }


    const buscarOrdenes = async () => {
        let config = {
            headers: { Authorization: `Bearer ${datosUsuario.token}` }
        }

        let resultado = await axios.get("https://buscadordepeliculas.herokuapp.com/api/orders", config)

        // console.log(resultado.data.data)
        setCambiarPantalla(resultado.data.data)
    }

    const updateInput = e => setValorInput(e.target.value)
    

    const buscarOrdenesPorUsuario = async () => {
       try {
        // console.log("Soy valor input",valorInput)
        let config = {
            headers: { Authorization: `Bearer ${datosUsuario.token}` }
        }  
        // console.log("Soy config",config)
        // console.log("soy valor input",valorInput)

        let resultado = await axios.get(`https://buscadordepeliculas.herokuapp.com/api/orders/userOrder=${valorInput}`,config)

        // console.log("Soy resultado",resultado.data.data)
        setCambiarPantalla(resultado.data.data)

       } catch (error) {
        // console.log("soy error",error.response.data.message)
        setMsgError(error.response.data.message)
       }
    }

    return (
        <div className='adminDesign'>
            <div className="adminPanel">

                <div className='adminRow'>
                    <p>Buscar todos los usuarios</p>
                    <button onClick={() => buscarUsuarios()}>Buscar</button>
                </div>
                <div className='adminRow'>
                    <p>Buscar todas las ordenes</p>
                    <button onClick={() => buscarOrdenes()}>Buscar</button>
                </div>
                <div className='adminRow'>
                    <p>Buscar ordenes por usuario</p>
                    <input type="text" onChange={updateInput}/>
                    <button onClick={() => buscarOrdenesPorUsuario()}>Buscar</button>
                </div>
            </div>

            <div className="adminResult">
                {cambiarPantalla.map(id => {
                    // console.log("Soy ID", id)
                    
                    if (id.returnDate !== undefined) {
                        return (
                            <div className='singContainerAdminResult'>
                                <strong> Order ID: </strong> {id._id} <br />
                                <strong> User ID:</strong> {id.userId} <br />
                                <strong> Movie Name:</strong>  {id.movieName} <br />
                                <strong>Order Date:</strong>   {id.orderDate} <br />
                                <strong>Return Date:</strong>  {id.returnDate} <br />
                            </div>
                        )
                    } else {
                        return (

                            <div className='singContainerAdminResult'>
                                <strong> ID:</strong>  {id._id} <br />
                                <strong> Email:</strong> {id.email} <br />
                                <strong>   Name:</strong>  {id.name} <br />
                                <strong> Created:</strong> {id.createdAt} <br />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Admin;