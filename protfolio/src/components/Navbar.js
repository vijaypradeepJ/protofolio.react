import '../components/styles/Navbar.css';
import '../components/styles/Mediaquery.css';
import { CiMenuBurger } from "react-icons/ci"

function Navbar(){
    return(
      <nav>
      <input type="checkbox" id="check"/>
      <label htmlForfor="check" className="checkbtn">
        <CiMenuBurger/>
      </label>
      <label className="logo">Protfolio</label>
      <ul>
        <li><a className="active" href="#home-page">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#my-works">My Works</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    
  
       

      




    )

}
export default Navbar;
