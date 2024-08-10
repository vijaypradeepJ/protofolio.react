import './Project.css';
import './Mediaquery.css';
import {Projectdata} from './Projectlist'
import { FaCss3Alt} from 'react-icons/fa';
import {FaHtml5} from 'react-icons/fa';
import {DiJavascript } from 'react-icons/di';

function Project(){
    return(
        <section id="my-works">
    <div class="portfolio">
      <div class="proj-heading">
        <h1>My Works</h1>
      </div>
      <div class="portfolio-content container">
        {Projectdata.map((Project)=> (
             <div class="proj-1">
             <img src={Project.src} alt={Project.src}/>
             <div class="proj1-details">
               <i class="fab fa-css3-alt"></i>
               <h2>{Project.title}</h2>
               <p><FaHtml5/>
               <FaCss3Alt/>
              < DiJavascript/>
              </p>
               <button><a href={Project.link1} target="blank">View source <i
                     class="fas fa-external-link-alt"></i></a>
               </button>
               <button><a href={Project.link2} target="blank">Try it Live <i
                     class="fas fa-external-link-alt"></i></a>
               </button>
             </div>
           </div>

        ))
            
        }

        

       
      </div>
    </div>
  </section>

    )
};
export default Project;