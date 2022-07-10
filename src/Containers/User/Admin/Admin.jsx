import React from 'react';
import './Admin.scss'
 
const Admin = () => {
     return (
         <div className='adminDesign'>
            <div className="adminPanel">

                <div className='adminRow'>
                <p>Buscar todos los usuarios</p>
                <input type="text" />
                </div>
                <div className='adminRow'>
                <p>Buscar todas las ordenes</p>
                <input type="text" />
                </div>
                <div className='adminRow'>
                <p>Buscar ordenes por usuario</p>
                <input type="text" />
                </div>

            </div>

            <div className="adminResult">
                Hola soy el resultado
            </div>

         </div>
     )
}
export default Admin;