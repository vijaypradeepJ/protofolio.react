import '../components/styles/Contact.css';
import '../components/styles/Mediaquery.css';
import { FaLinkedin} from "react-icons/fa";
import {FaGithubSquare} from 'react-icons/fa';

function Contact() {
    return(
        <div class="contact" id="contact-me">
    <div class="container">
      <div class="contact-content">
        <h2>Contact Me</h2>
        <p class="mail">
          Get in touch with me <i class="fas fa-arrow-right"></i> pradeepvijay3568@gmail.com<br /> Contact no- 9342496489
        </p>
        <p class="links">Or find me on:</p>
        <a href="http://www.linkedin.com/in/%20vijaypradeep-jeyam" target="blank"><FaLinkedin/>Linkedin</a>
        <a href="https://github.com/vijaypradeepJ" target="blank"><FaGithubSquare/> Github</a>
        <a href="https://www.instagram.com/vijay_dark_honert?igsh=MTc3MjNldW93cTMwaw==" target="blank">Instagram</a>
        <br />
        <p> copyright vijay All Rights Reserved</p>
      </div>
    </div>
  </div>

    )
};
export default Contact;
