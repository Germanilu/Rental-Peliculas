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
    const [isHovering, setIsHovering] = useState(false)

    const [id, setId] = useState()


    // const buscaId = () => {
    //     peliculasDefecto.map(pelicula => {
    //         console.log(pelicula._id)
           
    //     })
    // }
    // buscaId()

    const handleMouseOver = () => {

       setIsHovering(true)
        
    }

    const handleMouseOut = () => {
       setIsHovering(false)
    }


    const peliculaSeleccionada = () => {

        navegador('/detail')
    }


    useEffect(() => {

        peliculasDB();
        

    }, []);

    useEffect(() => {

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

    const peliculasMostrar = peliculasFiltradas.length > 0 ? peliculasFiltradas : peliculasDefecto ;


    return (
        <div className='styleBD'>
            <div className="searchDesign" >
                <input type="text" placeholder='Buscar...' id="buscador" onChange={(event) => filtrar(event.target.value)} />
            </div>

            <div className='containerMovieDb'>

                {
                    peliculasMostrar.map((pelicula) => {

                        return (
                            <div className='cardMovie' key={pelicula.id} >
                                <div className={isHovering? "movieDescriptionShow": "movieDescriptionHide"} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={() => peliculaSeleccionada()}>{pelicula.name}</div>
                                <img className={isHovering?  "imgCardMovieHide": "imgCardMovieShow"} src={pelicula.img} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={() => peliculaSeleccionada()}></img>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
};


export default MovieDB;


