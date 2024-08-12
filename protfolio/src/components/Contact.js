import '../components/styles/Contact.css';
import {FaAddressCard } from 'react-icons/fa';
import {FaPhoneAlt } from 'react-icons/fa';



function Contact(){

  return (
  
      <div class="contactdetails">
        <h1>Get in Touch With Me</h1>
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <FaAddressCard/>
              <div class="topic">Address</div>
              <div class="text-one">Surkhet, NP12</div>
              <div class="text-two">Birendranagar 06</div>
            </div>
            <div class="phonedetails">
            <h2><FaPhoneAlt/></h2>
              <div class="topic">Phone</div>
              <div class="text-one">+0098 9893 5647</div>
              <div class="text-two">+0096 3434 5678</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one">codinglab@gmail.com</div>
              <div class="text-two">info.codinglab@gmail.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text"></div>
          <form action="#">
            <div class="input-box">
              <input type="text" placeholder="Enter your name"/>
            </div>
            <div class="input-box">
              <input type="text" placeholder="Enter your email"/>
            </div>
            <div class="input-box message-box">
              
            </div>
            <div class="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
        </div>
      </div>
    
    
    
  );
}
export default Contact;
