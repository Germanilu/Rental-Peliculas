import React, {useState,useEffect} from 'react';
import './MovieDetail.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../User/userSlice';
import { takeData } from './detailSlice';
import axios from 'axios';
 
const Detail = () => {

    let credenciales = useSelector(userData)
    let detallesPelicula = useSelector(takeData);
    let navegador = useNavigate()
    

    //Hooks

    const [msgError, setMsgError] = useState("")
    
    
    useEffect(()=>{
        
        
    },[]);

    useEffect(() => {
      if (credenciales.token === "") {
          navegador('/')
      }
  });


    //Alquilar Pelicula
    const alquilar = async () => {

      try {
        let config = {
          headers: {Authorization: `Bearer ${credenciales.token}`}
      };

      
        let resultado = await axios.post(`https://buscadordepeliculas.herokuapp.com/api/order/${detallesPelicula._id}`,"",config)
        setMsgError(`Has alquilado ${resultado.data.data.movieName} `)
        console.log("Estoy aqui",resultado.data.data.movieName)
        console.log(resultado)
      } catch (error) {
        setMsgError(`${error.response.data.message}`)
        console.log(error.response.data.data)
      }
    }

    
    return (
      <div className="containerMovieDetail">
        <div className="containerImg"><img src={detallesPelicula.img} alt={detallesPelicula.name}  className="movieDetailImg"/></div>

        <div className="containerDescription">
          <div className="containerDescriptionTitle">Titulo: {detallesPelicula.name}</div>
          <div className="containerDescriptionGenre">Genero: {detallesPelicula.genre}</div>
          <div className="containerDescriptionDirector">Director: {detallesPelicula.director}</div>
          <div className="containerDescriptionActors">Actores: {detallesPelicula.actors}</div>
          <div className="containerDescriptionDescription">{detallesPelicula.description}</div>
          <div className="containerDescriptionButton" onClick={() => alquilar()}>Alquilar</div>
          <div className='msgError'>{msgError}</div>
        </div>

      </div>
         
     )
}
export default Detail;