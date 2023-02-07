 
 import { Link } from "react-router-dom";

function Navbar() {
  return (
     
        <nav className="navbar navbar-dark bg-dark">
        < Link  to="/" className="navbar-brand">Pocetna</Link>
        < Link  to="/pregledi" className="navbar-brand">Pregledi</Link>
 

   
        </nav>


     
  );
}

export default Navbar;
