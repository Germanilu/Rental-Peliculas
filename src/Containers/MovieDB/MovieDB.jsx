
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieDB.scss';
import { useSelector,useDispatch, } from 'react-redux';
/*import{searchData} from '../../Containers/User/userSlice' */



const MovieDB = () => {
/* 
    let peliculas = useSelector(searchData); */
    let dispatch = useDispatch();
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
            setPeliculasDefecto(peliculas.data.result);
            console.log(peliculas.data.data[0]);
        } catch (error) {

         

        }


    };

    

 

   
    return (
        <div className='styleBD'>

            holaaa
        </div>
       
    )
};











export default MovieDB;


