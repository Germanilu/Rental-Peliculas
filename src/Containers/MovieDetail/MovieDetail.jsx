import React, {useEffect} from 'react';
import './MovieDetail.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../User/userSlice';
import { takeData } from './detailSlice';
 
const Detail = () => {

    let credenciales = useSelector(userData)
    let detallesPelicula = useSelector(takeData);
    console.log("Estoy en moviedetail",detallesPelicula)
    
    useEffect(()=>{
        
        
    },[]);


    useEffect(() => {

    })

    
    return (
       <div>hola que tal</div>
         
     )
}
export default Detail;