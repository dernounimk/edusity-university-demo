import React from 'react'
import "./Contact.css"
import msg from "../../assets/msg-icon.png"
import phone from "../../assets/phone-icon.png"
import mail from "../../assets/mail-icon.png"
import location from "../../assets/location-icon.png"
import icon from "../../assets/white-arrow.png"


function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", import.meta.env.VITE_KEY);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  


  return (
    <div className='contact container' id='contact'>
      <div className="info">
        <h3>Send us a message <img src={msg} alt="" /></h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sequi consequatur cupiditate,
            ipsam quibusdam consectetur vitae veritatis, 
            officiis sunt amet sit! Ipsam sequi dignissimos debitis ipsum sint quos. Optio, maxime.
        </p>
        <ul>
            <li><img src={mail} alt="" />edusity.university@gmail.com</li>
            <li><img src={phone} alt="" />+123-456-7890</li>
            <li><img src={location} alt="" />Algeria ,Batna</li>
        </ul>
      </div>
      <div className='enter'>
      <form onSubmit={onSubmit}>
        <label htmlFor="thename">Your name</label>
        <input id='thename' type="text" name='name' placeholder='Enter your name' required/>
        <label htmlFor="themail">Your email</label>
        <input id='themail' type="text" name='email' placeholder='Enter your email' required/>
        <label htmlFor="themessage">Write your message here</label>
        <textarea id="themessage" name='message' placeholder='Enter your message' required></textarea>
        <button type='submit' className='btn'>Send now <img src={icon} alt="" /></button>
      </form>
      <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
