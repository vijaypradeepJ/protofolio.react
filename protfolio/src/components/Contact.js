import '../components/styles/Contact.css';
import {Contactdetails} from "./Contactdetailslist"



function Contact(){

  return (
  
      <div className="contactdetails">
        <h1>Get in Touch With Me</h1>
        <div className="content">
          <div className="left-side">
            {
              Contactdetails.map((detail)=>(
                <div className="address details">
                <h2>{detail.symbol}</h2>
                <div className="topic">{detail.detailname}</div>
                <div className="text-one">{detail.subdetail1}</div>
                <div className="text-two">{detail.subdetail2}</div>
              </div>

              ))
            }

            </div>
          <div className="right-side">
            <div className="topic-text"></div>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your name"/>
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email"/>
            </div>
            <div className="input-box message-box">
              
            </div>
            <div className="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
        </div>
      </div>
    
    
    
  );
}
export default Contact;
