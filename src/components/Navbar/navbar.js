import "./navbar.css";
import {Link} from "react-router-dom";

function navbar() {
  return (
    <div className="navbar-container">
        <Link to="/" className="nav-menu">Home</Link>          
        <Link to="/About" className="nav-menu">About</Link>
        <Link to="/Contact" className="nav-menu">Contact</Link>
    </div>

  )
}

export default navbar






//link tag page refresh na ho isiliye use hota hai. component ko pahele hi fetch krke rkhta hai.