import React from 'react';
import './Admin.scss'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import {userData} from '../userSlice'
import { useState } from 'react';
 
const Admin = () => {

    const datosUsuario = useSelector(userData)

   const [cambiarPantalla, setCambiarPantalla] = useState([])


    const buscarUsuarios = async () => {
        
        //Creo un objeto ocnfig donde metola Auth del token
        let config = {
            headers: {Authorization: `Bearer ${datosUsuario.token}`}
        }
        //Llamada axios con auth
        let resultado = await axios.get("https://buscadordepeliculas.herokuapp.com/api/users/",config)
        setCambiarPantalla(resultado.data.data)
        console.log(resultado)
    }


    const buscarOrdenes = async () => {
        let config = {
            headers: {Authorization: `Bearer ${datosUsuario.token}`}
        }

        let resultado = await axios.get("https://buscadordepeliculas.herokuapp.com/api/orders",config)

        console.log(resultado.data.data)
        setCambiarPantalla(resultado.data.data)
        console.log(resultado.lenght)
    }


//    console.log("Soy cambiarpantalla",cambiarPantalla[0].movieName)

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
                <input type="text" />
                <button>Buscar</button>
                </div>

            </div>

            <div className="adminResult">

                {cambiarPantalla.map(id => {
                   if( cambiarPantalla[0].movieName !== undefined ){
                    return(
                        
                        <div className='singContainerAdminResult'>
                          <strong> Order ID: </strong> {id._id} <br />
                          <strong> User ID:</strong> {id.userId} <br />
                          <strong> Movie Name:</strong>  {id.movieName} <br />
                          <strong>Order Date:</strong>   {id.orderDate} <br />
                          <strong>Return Date:</strong>  {id.returnDate} <br />                            
                        </div>
                    )
                   }else{
                    return(
                        
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