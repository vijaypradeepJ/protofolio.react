import '../components/styles/Contact.css';
import {FaAddressCard } from 'react-icons/fa';
import {FaPhoneAlt } from 'react-icons/fa';



function Contact(){

  return (
  
      <div className="contactdetails">
        <h1>Get in Touch With Me</h1>
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <FaAddressCard/>
              <div className="topic">Address</div>
              <div className="text-one">2/138,Nadu street</div>
              <div className="text-two">mallayapuram , dindigul -624707</div>
            </div>
            <div className="phonedetails">
            <h2><FaPhoneAlt/></h2>
              <div className="topic">Phone</div>
              <div className="text-one">9342496489</div>
              <div className="text-two">7667311060</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">pradeepvijay3568@gmail.com</div>
              <div className="text-two">vijayprdaeep3568@gmail.com</div>
            </div>
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
