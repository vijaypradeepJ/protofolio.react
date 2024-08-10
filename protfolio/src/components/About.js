import '../components/styles/About.css';
import '../components/styles/Mediaquery.css';
import logo from '../assets/myphoto.png'
import{Skills} from './Skillslist'
function About() {
    return(
        <section class="about-me" id="about">
    <div class="container">
      <div class="about-content">
        <div class="left-content">
          <div>
            <h1 class="about-heading">About Me</h1>
          </div>
          <img src={logo} alt={logo} />
          <p>
            I am available for web designing Project
            I really enjoy solving problem as well as making things pretty and easy to use.
             I can't stop learning new things;the more, the better.I'm a student with strong
              a interest for frontend Developer who is driven and aspirstional.
          </p>
          
          <div class="work-arrow">
            <p>
              <a href="#my-works">Check out my work <i class="fas fa-arrow-down"></i></a>
            </p>
          </div>
        </div>
        <div class="skills">
          <div class="right-content">
            <div>
              <h1 class="skills-heading">My Skills</h1>
            </div>
            <div class="skills-bar">
                {Skills.map((skill)=>(
                    

                    <div class="bar">
                    <div class="info">
                      <span>{skill.skill}</span>
                    </div>
                    <div class="progress-line"><span class={skill.progressline}></span></div>
    
                  </div>
                ))

                }

            </div>
            <div class="work-arrow-2">
              <p>
                <a href="#my-works">Check out my work <i class="fas fa-arrow-down"></i></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
       

    )



};
export default About;