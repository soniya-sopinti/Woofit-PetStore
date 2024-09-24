import './Services.css'
import { useState } from 'react'
import paw from '../assets/paw.png'
import service1 from '../assets/service1.jpeg'
import service2 from '../assets/service2.jpeg'
import service3 from '../assets/service3.jpeg'
import list1 from '../assets/list1.png'
import list2 from '../assets/list2.png'
import list3 from '../assets/list3.png'
import list4 from '../assets/list4.png'
import list5 from '../assets/list5.png'
import jaico from '../assets/p1.jpg'
import joe from '../assets/p2.jpg'
import emily from '../assets/p3.jpg'
import jack from '../assets/p4.jpg'
import  john from '../assets/p5.jpg'
import nexticon from '../assets/next-icon.png'
import backicon from '../assets/back-icon.png'



function Services () {


    const feedbacks = [
        {
            name : 'jaico.M',
            feedback :"Thanks to Woofit Pet Store, I found the perfect companion  They guided me through the adoption process and helped me choose a dog that’s a perfect fit for my home.Their dedication to animal welfare is truly admirable." ,
            picture:jaico

        },
        {
            name : 'joe.S',
            feedback :"The trainers at Woofit helped my puppy learn all the basic commands in just a few sessions.They were patient and used positive reinforcement techniques that worked wonders. My dog is now so well-behaved!" ,
            picture: joe

        },
        {
            name : 'emily.B',
            feedback :"I was nervous about leaving my cat while I went on vacation, but the team at Woofit Pet Store made me feel so at ease. They took such great care of her, and I loved getting updates while I was away. Highly recommend!" ,
            picture:emily

        },
        {
            name : 'jack.T',
            feedback :"The trainers at Woofit helped my puppy learn all the basic commands in just a few sessions. They were patient and used positive reinforcement techniques that worked wonders.My dog is now so well-behaved!" ,
            picture:jack

        },
        {
            name : 'john.S',
            feedback :"Woofit’s veterinary services are top-notch! They helped us with everything from vaccinations to dental care.The staff is knowledgeable and caring, and our dog’s health has never been better." ,
            picture:john

        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
      };
      const previous= () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
      };

    return(
        <>
<div className="services">
            <div className="services-title">
                <h2># Our Pet Care Services <img className='paw' src={paw} />
                </h2>
               <p>We offer a variety of services tailored to keep your pets happy, healthy,
                 and well-groomed. Explore our services below!</p>
            </div>
           
         <div className="service-box">

            
            <div className="services-intro">
                <p>At Woofit Pet Store, we are dedicated to offering top-notch services that ensure the health,
                     happiness, and well-being of your furry companions. From professional grooming and pet training to
                      comfortable boarding facilities, we treat every pet with the love and care they deserve.
                      
                     Explore our range of services and let us help your pets live their best life</p>
            </div>
                <div className="services-image">
                        <div className="service-photo1">
                        <img src={service1} />
                        </div>
                        <div className="service-photo">
                            <img src={service2}/>
                            <img src={service3}/>
                        </div>
                        </div>
                </div>
            
        <div className="services-list">
            <h2>List of services</h2>
            <div className="list    grooming">
                <div className="list-img">
                <img src={list1} className='list-left'/>
                </div>
                <div className="list-left-desc">
                    <h3>Pet Grooming....</h3>
                    <p>Keep your pets looking and feeling their best with our professional grooming services. 
                        From baths to nail trimming, we cater to all breeds and sizes with gentle, expert care.<br/>
                    </p>
                </div>
            </div>
            <div className="list   boarding">
               
                <div className="list-right-desc">
                    <h3>Pet Boarding....</h3>
                    <p>Going away? Leave your pet in safe hands with our cozy boarding facilities.
                         We provide clean, comfortable spaces and plenty of attention 
                         to keep your pet relaxed while you're away.<br/>
                   </p>
                </div>
                <div className="list-img">
                <img src={list2} className='list-right'/>
                </div>
            </div>
            <div className="list    training">
                <div className="list-img">
                <img src={list3} className='list-left'/>
                </div>
                <div className="list-left-desc  ">
                    <h3>Pet Training....</h3>
                    <p> Our experienced trainers offer personalized training sessions for dogs of all ages.
                         Whether it's basic commands or specialized behavioral training, we help your pet 
                         become their best self.<br/>
                   </p>
                </div>
            </div>
            <div className="list    veterinary">
               
                <div className="list-right-desc">
                    <h3>Veterinary Services....</h3>
                    <p>Ensure your pet's health with our comprehensive veterinary services.
                         From routine check-ups to vaccinations, we offer professional care to keep your 
                         pets in top shape.<br/>
                    </p>
                </div>
                <div className="list-img">
                <img src={list4} className='list-right'/>
                </div>
            </div>
            <div className="list    adoption">
                <div className="list-img">
                <img src={list5} className='list-left'/>
                </div>
                <div className="list-left-desc" >
                    <h3> Pet Adoption Support....</h3>
                    <p> Looking to adopt a new family member? We can guide you through the process 
                        and help you find the perfect pet.<br/>
                    </p>
                </div>
            </div>
        </div>
        <h2 className='feedback-title'>Hear From Our Happy Customers</h2>
        <div className='cust-feedback'>
        <div className="feedback-slider">
            <img src = {backicon} className='arrow  next-btn'
            onClick={next} />
            <div className="feedback-content">
                <img className='cust-image' src={feedbacks[currentIndex].picture} />
                <h4>{feedbacks[currentIndex].name}</h4>
                <p>{feedbacks[currentIndex].feedback}</p>
            </div>
            <img src={nexticon} className='arrow back-btn' onClick={previous}/>
              
            
        </div>
        </div>

</div>
        </>
    );
}

export default Services