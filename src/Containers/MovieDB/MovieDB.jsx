import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieDB.scss';
import { useSelector,useDispatch, } from 'react-redux';
/*import{searchData} from '../../Containers/User/userSlice' */
import { useNavigate } from 'react-router-dom';


const MovieDB = () => {
/* 
    let peliculas = useSelector(searchData); */
    let dispatch = useDispatch();
    let navegador = useNavigate();
    //hook de películas
    const [peliculasDefecto, setPeliculasDefecto] = useState([]);


    useEffect(() => {

        peliculasDB();

    }, []);

    useEffect(() => {

      

    });

    const peliculasDB = async () => {

        try {
            let peliculas = await axios.get('https://buscadordepeliculas.herokuapp.com/api/movie/all');
            setPeliculasDefecto(peliculas.data.data);
            console.log(peliculas.data.data);
        } catch (error) {

            console.log(error)
        }
    };

    useEffect(() => {
       
    })


    return (
        <div className='styleBD'>

            {
                peliculasDefecto.map(pelicula => {
                    console.log(pelicula.name)
                    return(
                        <div className="cardFilm" key={pelicula.id}>{pelicula.name}</div>
                    )
                })
            }

        </div>
       
    )
};


export default MovieDB;


