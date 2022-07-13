import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieDB.scss';
import { userData } from '../../Containers/User/userSlice';
import { useSelector, useDispatch, } from 'react-redux';
import {keepFilm} from '../MovieDetail/detailSlice'
import { useNavigate } from 'react-router-dom';



const MovieDB = () => {
     
   

    const datosUsuario = useSelector(userData)
    let dispatch = useDispatch();
    let navegador = useNavigate();
    //hook de películas
    const [peliculasDefecto, setPeliculasDefecto] = useState([]);
    const [peliculasFiltradas, setPeliculasFiltradas] = useState([]);
    //Hook Hover on movie card
    const [isHovering, setIsHovering] = useState(-1)


    //On Mouse Over
    const handleMouseOver = (name) => {
        setIsHovering(name)

    }
    //On Mouse Out
    const handleMouseOut = (i) => {
        setIsHovering(i)
    }

    //Onclick navigate to Detail
    const peliculaSeleccionada = (pelicula) => {
        dispatch(keepFilm(pelicula))
        setTimeout(() => {
            navegador('/detail')
        }, 500)

    }


    useEffect(() => {
        peliculasDB();
    }, []);

    useEffect(() => {
        if (datosUsuario.token === "") {
            navegador('/')
        }
    });

    const peliculasDB = async () => {

        try {
            let peliculas = await axios.get('https://buscadordepeliculas.herokuapp.com/api/movie/all');
            setPeliculasDefecto(peliculas.data.data);
        } catch (error) {

            console.log(error)
        }
    };

    const filtrar = (value) => {
        const pelisFiltradas = peliculasDefecto.filter((peli) => peli.name.includes(value));
        setPeliculasFiltradas(pelisFiltradas)

    }


    const peliculasMostrar = peliculasFiltradas.length > 0 ? peliculasFiltradas : peliculasDefecto;


    return (
        <div className='styleBD'>
            
                <input type="text" placeholder='Buscar...' id="buscador" onChange={(event) => filtrar(event.target.value)} />
            

            <div className='containerMovieDb'>
                {
                    peliculasMostrar.map((pelicula) => {
                        return (
                            <div className='cardMovie' key={pelicula.name} onMouseOver={() => handleMouseOver(pelicula.name)} onMouseOut={() => handleMouseOut(-1)}>
                                <div className={isHovering === pelicula.name ? "movieDescriptionShow" : "movieDescriptionHide"} onClick={() => peliculaSeleccionada(pelicula)}>
                                    <div className="containerMovieDescription">
                                        <div className="containerTitle">Titulo: <br /> {pelicula.name}</div>
                                        <div className="containerGenre">Categoria: <br /> {pelicula.genre}</div>
                                        <div className="containerActors">Actores: <br /> {pelicula.actors}</div>
                                        <div className="containerDescriptionImg"><img src={pelicula.img} alt="" className='descriptionImg' /></div>
                                    </div>
                                </div>

                                <img className={isHovering === pelicula.name ? "imgCardMovieHide" : "imgCardMovieShow"} src={pelicula.img} onMouseEnter={() => handleMouseOver(pelicula.name)} onMouseLeave={() => handleMouseOut(-1)} alt={pelicula.name}></img>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};


export default MovieDB;


