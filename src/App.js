import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes,Route} from 'react-router-dom';
import Home from './Home/Home.js';

function App() {
  // window.addEventListener('scroll',(event)=>{
  //   console.log(window.scrollY)
  // })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
