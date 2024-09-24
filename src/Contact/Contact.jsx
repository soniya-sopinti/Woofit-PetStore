import './Contact.css'
import React from 'react'
import contact from '../assets/contact.png'
import mail from '../assets/mail.png'
import msg from '../assets/msg.png'
import location from '../assets/location.png'

function Contact(){

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e07f2c6c-65bb-4e96-b4dc-658f2be68109");

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
        <>
        <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg}/></h3>
              <p>Have a question or need assistance with your pet’s needs? Our team is here to help!
                 Whether you're looking for more information on our services, want to book an appointment, 
                 or simply have a general inquiry, feel free to reach out. We’d love to hear from you!
                 Contact us today and let us help your furry friends live their best lives.</p>
                 <ul>
                    <li><img src={mail}/>soniasopinti29@gmail.com</li>
                    <li><img src={contact}/>+357-098-8890</li>
                    <li><img src={location}/>123 Paw Lane<br/>
                    Barksville, PA 17235</li>
                 </ul>
                 </div>
            <div className="contact-col">
               <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='number' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                <button className='submit-btn'>Submit Now</button>
               </form>
               <span>{result}</span>
            </div>
           
        </div>
        </>
    );
}


export default Contact