
import About from './Pages/About';
import Home from './Pages/Home';
import Feed from './Pages/Feed';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
 import {Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
    
   <Routes>
   <Route path='/'  element={<Home/>}></Route>
   <Route path='/about' element={<About/>}></Route>
   <Route path='/login' element={<Login/>}></Route>
   <Route path='/signup' element={<SignUp/>}></Route>
   <Route path='/feed' element={<Feed/>}></Route>


{/* 
   <Route></Route>
   <Route></Route>
   <Route></Route> */}
   </Routes>
    </div>
  );
}

export default App;
