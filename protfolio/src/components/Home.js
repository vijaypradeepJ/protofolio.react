import '../components/styles/Home.css';
import '../components/styles/Mediaquery.css';
import {ReactTyped} from "react-typed";
import image from '../assets/black.png'
import { FaLinkedin} from "react-icons/fa";
import {FaGithubSquare} from 'react-icons/fa';
import {FaMailBulk} from 'react-icons/fa';
function Home(){
    return(
        
        <div className="home-content" id="home-page">
         
        <div className="name">
          <img src={image} alt={image} />

          <h1> Hi, I'm vijay Pradeep</h1>
          <p><ReactTyped strings={["I'm Web Devloper"]} typeSpeed={100} loop /></p>
          <div className="link">
          <a href="http://www.linkedin.com/in/%20vijaypradeep-jeyam" target="blank"><FaLinkedin/>Linkedin</a>
        <a href="https://github.com/vijaypradeepJ" target="blank"><FaGithubSquare/> Github</a>
        <a href="mailto:pradeepvijay3568@gmail.com"><FaMailBulk/>E-Mail</a>
       

          </div>
       
        
        </div>
      </div>
     

    )
};
export default Home;
