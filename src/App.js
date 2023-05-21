
import About from './Pages/About';
import Home from './Pages/Home';
import Feed from './Pages/Feed';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import {Routes,Route} from 'react-router-dom'
import TicTac from './Games/TicTacToe/TicTac'
import QuizComp from './Games/Quiz/QuizComp';
import Crush from './Games/candy-crush-reactjs/src/Crush'
import CardGame from './Games/react-memo/src/App';
import './App.css';
import SPS from './Games/StonePaperScissor/SPS';
import Hangman from './Games/react-hangman/Hangman'
import Break from './Games/breakoutvideo/src/App'
function App() {
  return (
    
    <div className="App">
   <Routes>
   <Route path='/'  element={<Home/>}></Route>
   <Route path='/about' element={<About/>}></Route>
   <Route path='/login' element={<Login/>}></Route>
   <Route path='/signup' element={<SignUp/>}></Route>
   <Route path='/feed' element={<Feed/>}></Route>
   {/* games */}
   
   <Route path='/tic-tac-toe' element={<TicTac/>}></Route>
   <Route path='/quiz' element={<QuizComp/>}></Route>
   <Route path='/candycrush' element={<Crush/>}></Route>
   <Route path='/card-game' element={<CardGame/>}></Route>
   <Route path = "/feed/stone-paper-scissor" element= {<SPS></SPS>}> </Route>
   <Route path = "/hangman" element={<Hangman/>}></Route>
   <Route path="/breakout" element={<Break></Break>}></Route> 

{/* 
   */}
   </Routes>
    </div>
  );
}

export default App;
