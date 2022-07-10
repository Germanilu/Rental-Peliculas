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
        console.log(resultado.data.data)
        setCambiarPantalla(resultado.data.data)
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
                <input type="text" />
                <button>Buscar</button>
                </div>
                <div className='adminRow'>
                <p>Buscar ordenes por usuario</p>
                <input type="text" />
                <button>Buscar</button>
                </div>

            </div>

            <div className="adminResult">
                
                {cambiarPantalla.map(id => {
                    return(
                        <div className='singContainerAdminResult'>
                            id: {id._id} <br />
                            Email: {id.email} <br />
                            Name: {id.name} <br />
                            Created: {id.createdAt} <br />                            
                        </div>
                    )
                })}
                
            </div>

         </div>
     )
}
export default Admin;