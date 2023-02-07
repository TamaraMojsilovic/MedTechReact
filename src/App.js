 
import './App.css';
import Navbar from './komponente/Navbar';
import WelcomePage from './komponente/WelcomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function App() {




  const [pregledi,setPregledi] = useState([
    {
      id:1,
      naziv:"Pregled specijaliste",
      cena:3500,
      doktor:"Jovanovic Branka",
      pacijent:"Budimir Ana",

    },
    {
      id:2,
      naziv:"IVF",
      cena: 150000,
      doktor:"Ana Markovic",
      pacijent:"Pera Peric",

    },
    {
      id:3,
      naziv:"Ultrazvucni pregled",
      cena:4000,
      doktor:"Jovanovic Milos",
      pacijent:"Marko Petrovic",

    },
    {
      id:4,
      naziv:"Konsultacije bez ultrazvuka",
      cena: 2400,
      doktor:"Jovanovic Branka",
      pacijent:"Budimir Ana",

    },

  ]);


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
