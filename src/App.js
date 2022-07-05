
import './App.scss';
import './Global.scss'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Register from './Containers/User/Register/Register';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path= '/' element= {<Home/>}/>
      <Route path= '/register' element= {<Register/>}/>
    </Routes>
    
    
    </BrowserRouter>
    
  );
}

export default App;
