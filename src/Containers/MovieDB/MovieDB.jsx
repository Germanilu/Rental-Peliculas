import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieDB.scss';
import { useSelector, useDispatch, } from 'react-redux';
/*import{searchData} from '../../Containers/User/userSlice' */
import { useNavigate } from 'react-router-dom';



const MovieDB = () => {
    /* 
        let peliculas = useSelector(searchData); */
    let dispatch = useDispatch();
    let navegador = useNavigate();
    //hook de películas
    const [peliculasDefecto, setPeliculasDefecto] = useState([]);
    const [peliculasFiltradas, setPeliculasFiltradas] = useState([]);


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

    const filtrar = (value) => {


        const pelisFiltradas = peliculasDefecto.filter((peli) => peli.name.includes(value));

        setPeliculasFiltradas(pelisFiltradas)

    }

    const peliculasMostrar = peliculasFiltradas.length > 0 ? peliculasFiltradas : peliculasDefecto;


    return (
        <div>

            <div className="" >
                <input type="text" placeholder='Buscar' id="buscador" onChange={(event) => filtrar(event.target.value)} />
            </div>

            <div className='styleBD'>

                {
                    peliculasMostrar.map(pelicula => {

                        return (
                            <div className="cardFilm" key={pelicula.id}>{pelicula.name}</div>
                        )
                    })
                }
            </div>

        </div>
    )
};


export default MovieDB;


