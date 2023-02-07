 
import './App.css';
import Navbar from './komponente/Navbar';
import WelcomePage from './komponente/WelcomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Pregledi from './komponente/Pregledi';
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
 
  function obrisi(id){
      setPregledi(pregledi.filter( p=>p.id!=id))
      console.log(pregledi)
  }
 
  function postaviFilter() {
 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("pretraga");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    console.log(table);
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              console.log(tr[i])
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Navbar postaviFilter={postaviFilter}  ></Navbar>
      <Routes>
        <Route path="/" element={ <WelcomePage></WelcomePage>}></Route>
        <Route path="/pregledi" element={ <Pregledi pregledi={pregledi} obrisi={obrisi}></Pregledi>}></Route>
     


      </Routes>
    
       

      </BrowserRouter>
     
    </div>
  );
}

export default App;
