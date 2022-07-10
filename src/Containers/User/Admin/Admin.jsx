import React from 'react';
import './Admin.scss'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import {userData} from '../userSlice'
import { useState } from 'react';
 
const Admin = () => {

    const datosUsuario = useSelector(userData)

   const [cambiarPantalla, setCambiarPantalla] = useState(["hola"])

    const buscarUsuarios = async () => {
        
        //Creo un objeto ocnfig donde metola Auth del token
        let config = {
            headers: {Authorization: `Bearer ${datosUsuario.token}`}
        }
        //Llamada axios con auth
        let resultado = await axios.get("https://buscadordepeliculas.herokuapp.com/api/users/",config)
        console.log(resultado.data.data[0].name)
        setCambiarPantalla(resultado.data.data[0].name)
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
                
                {cambiarPantalla}
                
            </div>

         </div>
     )
}
export default Admin;