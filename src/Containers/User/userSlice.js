import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jwt-decode';







export const userSlice = createSlice({
    //Nombre que tiene el slice
    name: 'user',
    initialState: {
        token:""
    },

    //El reducer login recibe un estado y una accion, el estado sera la copia del estado anterior, la accion son los nuevos datos que estan entrando que se ejecutan con .payload
    reducers: {
        login: (state,action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        //El reducer logout recibe un estado y una accion, solo se ejecutara el estado que sera = que el initialState osea sin token
        logout: (state,action) => {
            return{
                token: ""
            }
        },
        update:(state,action) => {
            return{
                ...state,
                ...action.payload
            }
        }
    },
});

//Exporto loginUser (necesito que me la expliquen)
export const loginUser = (body) => async (dispatch) => {
    try {
        //Utilizo axios
        const user = await axios.post("https://buscadordepeliculas.herokuapp.com/api/auth/login", body)
        //Console.log para que me muestre los datos del usuario (id/user/token)
        console.log(user)

        //Decodifico el token
        let decodificada = jwt(user.data.token)

        //Si me devuelve un 200 hago el login y decodifico el token.
        if(user.status === 200){
            dispatch(login({...decodificada,token: user.data.token}))
        }

    } catch (error) {
        //Como retorno este error en un setMsgError?
        console.log(error)
    }
}


//Exporto logOut que simplemente me devuelve el initialState del token y a si permite que el usuario se desloguee
export const logOut = () => (dispatch) => {
    dispatch(logout())
}


//Update user
export const updateUser = (datosUsuario,perfilUsuario) => async (dispatch) =>{
    try {
        let body = {
            name: perfilUsuario.user_name,
            surname: perfilUsuario.user_surname,
            email: perfilUsuario.user_email,
            address: perfilUsuario.user_address,
            city: perfilUsuario.user_city,
            mobile: perfilUsuario.user_mobile
            
        }
        console.log(body)

        let config = {
            headers: {Authorization: `Bearer ${datosUsuario.token}`}
        };

        let resultado = await axios.put(`https://buscadordepeliculas.herokuapp.com/api/users/${datosUsuario.user_id}`,body, config);
        console.log(resultado)

        if(resultado.status === 200) {
            //Si el usuario cambia email le fuerzo un logout
           if(datosUsuario.user_email !== body.email){
            console.log("datosusuario",datosUsuario.user_email)
            console.log("body",body.email)
            dispatch(logout())
           }else{
            dispatch(update({perfilUsuario}));
           }
            //Hacemos un update local de las credenciales del usuario
            
          }
    
    } catch (error) {
        console.log(error)
    }
}

//Exporto los reducers login,logout
export const {login,logout,update} = userSlice.actions;

//No entiendo bien esta linea
export const userData = (state) => state.user;

//Exporto el nuevo slice llamado "userSlice"
export default userSlice.reducer
