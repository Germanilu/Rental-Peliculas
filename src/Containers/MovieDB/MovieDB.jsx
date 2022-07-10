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

    const filtrar = (value) => {


        const pelisFiltradas = peliculasDefecto.filter((peli) => peli.name === value);

        setPeliculasFiltradas(pelisFiltradas)

    }

    const peliculasMostrar = peliculasFiltradas.length > 0 ? peliculasFiltradas : peliculasDefecto;


    return (
        <div className='styleBD'>
            <div className="searchDesign" >
                <input type="text" placeholder='Buscar...' id="buscador" onChange={(event) => filtrar(event.target.value)} />
            </div>
            
            <div className='prova'>

                {
                    peliculasMostrar.map(pelicula => {
                        console.log(pelicula)

                        return (
                            <div className="cardMovie" key={pelicula.id}>
                                <img className='imgCardMovie' src={pelicula.img}></img>
                            </div>
                        )
                    })
                }
            </div>
        </div>
       
    )
};


export default MovieDB;


