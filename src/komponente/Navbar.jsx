 
 import { Link } from "react-router-dom";

function Navbar({postaviFilter}) {
  return (
     
        <nav className="navbar navbar-dark bg-dark">
        < Link  to="/" className="navbar-brand">Pocetna</Link>
        < Link  to="/pregledi" className="navbar-brand">Pregledi</Link>
 

        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="pretraga" onChange={postaviFilter}/>
             
        </form>
        </nav>


     
  );
}

export default Navbar;
