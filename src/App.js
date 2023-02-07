 
import './App.css';
import Navbar from './komponente/Navbar';
import WelcomePage from './komponente/WelcomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Navbar  ></Navbar>
      <Routes>
        <Route path="/" element={ <WelcomePage></WelcomePage>}></Route>
     


      </Routes>
    
       

      </BrowserRouter>
     
    </div>
  );
}

export default App;
