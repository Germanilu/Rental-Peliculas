
import './App.scss';
import './Global.scss'


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Register from './Containers/User/Register/Register';
import Login from './Containers/User/Login/Login'
import MovieDB from './Containers/MovieDB/MovieDB';
import EditProfile from './Components/EditProfile/EditProfile'
import Admin from './Containers/User/Admin/Admin';
import MovieDetail from './Containers/MovieDetail/MovieDetail'
import Orders from './Containers/Orders/Orders';


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
      <Route path= '/admin' element= {<Admin/>}/>
      <Route path= '/detail' element= {<MovieDetail/>}/>
      <Route path= 'orders' element= {<Orders/>}/>
    </Routes>
    
    
    </BrowserRouter>
    
  );
}

export default App;
