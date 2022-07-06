import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Register.scss';


const Register = (props) =>{

    //HOOK con los datos a rellenar

    const [userDades, setUserDades] = useState({
        name:'',
        surname:'',
        age:'',
        email:'',
        mobile:'',
        city:'',
        address:'',
        password:'',
        password2:'',

    });

    const [registrado, setRegistrado] = useState('');
    const [msgError, setMsgError] = useState('');
    
    //variable
    let navigate = useNavigate();
    
    //HANDLERS

    const updateUserDades = (e) => {
        setUserDades({ ...userDades, [e.target.name]: e.target.value })
    }

    //Creamos por primera vez el componente con este useEffect.
    useEffect(() => {
        
    }, [])

    //Con este useEffect, cada vez que se modifica algo, se actualiza.
    useEffect(() => {
        
    })

    const Registrate = async () => {

        //Primero, comprobación de campos vacíos

        let datos = ['name','surname','age','email','mobile',' address','password', 'password2'];

        for(let field of datos){
            if(userDades[field] === ''){
                 setMsgError(`Te ha faltado ${[field]} por rellenar`);
                return;
            }
        }            
           
    // Con este IF, revisamos que la password, esta escrita igual las dos veces
    
        if(userDades.password !== userDades.password2){

        setMsgError("Los dos password deben de coincidir");
        return;
        }
            //enviamos los datos a la base de datos 
        let intentoRegistro = await axios.post("https://buscadordepeliculas.herokuapp.com/api/auth/register", userDades);

        if(intentoRegistro.status === 200){

            setRegistrado(true);

            setTimeout(() => {
            navigate('/login');
        
            },2000);
        }
        
    }

     if(registrado === true){

        return (
            <div className="registerDesign">
                Te has registrado correctamente {userDades.name}
            </div>
        )

    }else{
        return(
            <div className ='registerDesign'>  
                <div className="registerDesignLeft">
                    <input className='bottonDesign' placeholder='name' type='text' name='name' title='name' onChange={updateUserDades}/>
                    <input className='bottonDesign' placeholder='surname' type='text' name='surname' title='surname' onChange={updateUserDades}/>
                    <input className='bottonDesign' placeholder='age' type='text' name='age' title='age' onChange={updateUserDades}/>
                    <input className='bottonDesign' placeholder='email' type='email' name='email' title='email' onChange={updateUserDades}/>
                    <input className='bottonDesign' placeholder='city' type='text' name='city' title='city' onChange={updateUserDades}/>
                </div>
                <div className="registerDesignRight">
                    <input className='bottonDesign' placeholder='mobile' type='text' name='mobile' title='mobile' onChange={updateUserDades}/>
                    <input className='bottonDesign' placeholder='address' type='text' name='address' title='address' onChange={updateUserDades}/>
                    <input className='bottonDesign' placeholder='password' type='password' name='password' title='password' onChange={updateUserDades}/>
                    <input className="bottonDesign" placeholder='password2' type='password' name='password2' title='password2' onChange={updateUserDades}/>
                    <div className="designMessageError">
                    {msgError}
                    </div>

                    <div className="bottonDesignRegister" onClick={()=>Registrate()}>REGISTRATE</div>                  
                </div>
            </div> 
                   
        )

    }
}

export default Register;