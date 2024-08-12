import '../components/styles/About.css';
import '../components/styles/Mediaquery.css';
import {Skills} from "./Skillslist";

import logo from '../assets/myphoto.png'

function About() {
    return(
      <section className="about-me" id="about">
      <div className="container">
        <div className="about-content">
          <div className="left-content">
            <div>
              <h1 className="about-heading">About Me</h1>
            </div>
            <img src={logo} alt={logo}/>
            <p>
              I am available for web designing Project
              I really enjoy solving problem as well as making things pretty and easy to use.
               I can't stop learning new things;the more, the better.I'm a student with strong
                a interest for frontend Developer who is driven and aspirstional.
            </p>
            
            <div className="work-arrow">
              <p>
                <a href="#my-works">Check out my work <i class="fas fa-arrow-down"></i></a>
              </p>
            </div>
          </div>
          <div className="skills">
            <div className="right-content">
              <div>
                <h1 className="skills-heading">My Skills</h1>
              </div>
              <div className="skills-bar">
                {
                  Skills.map((skills) =>
                  (
                    <div className="bar">
                    <div className="info">
                    <span>{skills.title}{skills.symbol}</span>
                   </div>
                   <div className="progress-line"><span className={skills.title}></span>
                   </div>
                   </div>

                  ))

                }

            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
    



};
export default About;