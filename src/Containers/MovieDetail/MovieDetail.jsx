import React, { useState, useEffect } from 'react';
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


  useEffect(() => {


  }, []);

  useEffect(() => {
    if (credenciales.token === "") {
      navegador('/')
    }
  });


  //Alquilar Pelicula
  const alquilar = async () => {

    try {
      let config = {
        headers: { Authorization: `Bearer ${credenciales.token}` }
      };


      let resultado = await axios.post(`https://buscadordepeliculas.herokuapp.com/api/order/${detallesPelicula._id}`, "", config)
      setMsgError(`Has alquilado ${resultado.data.data.movieName} `)
      console.log("Estoy aqui", resultado.data.data.movieName)
      console.log(resultado)
    } catch (error) {
      setMsgError(`${error.response.data.message}`)
      console.log(error.response.data.data)
    }
  }


  return (
    <div className="containerMovieDetail">


      <div className="containerDescription">
        <div className="containerDescriptionTitle">{detallesPelicula.name}</div>
        <div className="containerDescriptionDescription">{detallesPelicula.description}</div>
        <div className="containerDescriptionGenre">Genero: {detallesPelicula.genre}</div><br />
        <div className="containerDescriptionDirector">Director: {detallesPelicula.director}</div><br />
        <div className="containerDescriptionActors">Actores: {detallesPelicula.actors}</div><br />

        <div className='alquilerButton'>
          <div className="containerDescriptionButton" onClick={() => alquilar()}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Alquilar</div>
        </div>
        <div className='msgError'>{msgError} </div>

      </div>
      <div className="containerImg"><img src={detallesPelicula.img} alt={detallesPelicula.name} className="movieDetailImg" /></div>
    </div>

  )
}
export default Detail;