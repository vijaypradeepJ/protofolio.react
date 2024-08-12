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
        <li><a className="active" href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
    </nav>
    
  
       

      




    )

}
export default Navbar;
