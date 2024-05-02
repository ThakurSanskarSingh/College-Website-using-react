import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import { useForm } from 'react-hook-form'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2734a6e3-1ac5-4990-9521-77f133b441e6");
  
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
        <div className='contact'>
            <div className="contact-col">
                <h3>Send Us A message <img src={msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda saepe eaque nostrum expedita repudiandae veniam accusamus voluptatibus consequatur ea fugit iusto ducimus, officia, dicta in a dolorem quos magnam architecto?</p>
                <ul>
                    <li> <img src={mail_icon} alt="" />Contact@Sanskar.dev</li>
                    <li> <img src={phone_icon} alt="" />@1345685165</li>
                    <li> <img src={location} alt="" />Ghaciabad 201206</li>
                </ul>
            </div>
            <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label >Your Name</label>
        <input type="text" name="name" required/>
        <label >Phone Number</label>
        <input type="tel" name="phone" required/>
        <label >Write YOur Messages</label>
        <textarea name="message" rows='6' required></textarea>

        <button type="submit" className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>

      </form>
      <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact