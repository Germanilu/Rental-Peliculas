
import './App.scss';
import './Global.scss'


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Register from './Containers/User/Register/Register';
import Login from './Containers/User/Login/Login'
<<<<<<< HEAD
import MovieDB from './Containers/MovieDB/MovieDB';
=======
import EditProfile from './Components/EditProfile/EditProfile'

>>>>>>> 1ee30240a0f4f7735f6208159d91c550a141aab9


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path= '/' element= {<Home/> } />
      <Route path= '/register' element= {<Register/>}/>
      <Route path= '/login' element= {<Login/>}/>
<<<<<<< HEAD
      <Route path='/movie' element={<MovieDB/>}/>
=======
      <Route path= '/edit-profile' element= {<EditProfile/>}/>
>>>>>>> 1ee30240a0f4f7735f6208159d91c550a141aab9
    </Routes>
    
    
    </BrowserRouter>
    
  );
}

export default App;
