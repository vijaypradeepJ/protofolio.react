import '../components/styles/Project.css';
import '../components/styles/Mediaquery.css';
import {Projectdata} from './Projectlist'
import { FaCss3Alt} from 'react-icons/fa';
import {FaHtml5} from 'react-icons/fa';
import {DiJavascript } from 'react-icons/di';

function Project(){
    return(
        <section id="my-works">
    <div className="portfolio">
      <div className="proj-heading">
        <h1>My Works</h1>
      </div>
      <div className="portfolio-content container">
        {Projectdata.map((Project)=> (
             <div className="proj-1">
             <img src={Project.Image} alt={Image}/>
             <div className="proj1-details">
               <h2>{Project.title}</h2>
               <p><FaHtml5/>
               <FaCss3Alt/>
              < DiJavascript/>
              </p>
               <button><a href={Project.link1} target="blank">View source
                  </a>
               </button>
               <button><a href={Project.link2} target="blank">Try it Live
                     /</a>
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