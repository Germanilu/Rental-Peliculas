import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../Containers/User/userSlice';
import detailSlice from '../Containers/MovieDetail/detailSlice';
export default configureStore({
    //El reducer es una funcion pura que toma el estado anterior y una accion, y devuelve el nuevo estado
    reducer: {
        user: userSlice,
        dataFilm: detailSlice
    }
});