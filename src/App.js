
import './App.scss';
import './Global.scss'


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Register from './Containers/User/Register/Register';
import Login from './Containers/User/Login/Login'
import MovieDB from './Containers/MovieDB/MovieDB';
import EditProfile from './Components/EditProfile/EditProfile'



function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path= '/' element= {<Home/> } />
      <Route path= '/register' element= {<Register/>}/>
      <Route path= '/login' element= {<Login/>}/>
      <Route path='/movie' element={<MovieDB/>}/>
      <Route path= '/edit-profile' element= {<EditProfile/>}/>
    </Routes>
    
    
    </BrowserRouter>
    
  );
}

export default App;
