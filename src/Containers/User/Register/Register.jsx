import './Register.scss'
import { useNavigate } from 'react-router-dom'

const Register = () =>{

    return(
        <div className ='registerDesign'>  
            <div className="registerDesignLeft">
            <div className='bottonDesign'>NAME</div>
            <div className='bottonDesign'>USERNAME</div>
            <div className='bottonDesign'>USERNAME2</div>
            <div className='bottonDesign'>AGE</div>
            <div className='bottonDesign'>EMAIL</div>
            </div>
            <div className="registerDesignRight">
            <div className='bottonDesign'>MOBILE</div>
            <div className='bottonDesign'>STREET</div>
            <div className='bottonDesign'>PASSWORD</div>
            <div className="bottonDesign">CREDITCARD</div>  
            <div className="bottonDesign">REGIST</div>                  
                </div>
            </div>        
    )


}


export default Register;