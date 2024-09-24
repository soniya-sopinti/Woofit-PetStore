import './About.css';
import { useState } from 'react';
import team1 from '../assets/team1.jpeg';
import team2 from '../assets/team2.jpeg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';
import team6 from '../assets/team6.jpg';
import team7 from '../assets/team7.jpeg';
import team8 from '../assets/team8.jpeg';
import team9 from '../assets/team9.jpeg';
import quality from '../assets/quality food.jpg';
import customer from '../assets/customer commitment.jpg';
import compassion from '../assets/compassion for pets.jpg';
import myVideo from '../assets/pet-video.mp4';
import dogpaw from '../assets/dogpaw.png';

function About() {
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (cardNumber) => {
    console.log('opening the modal card:',cardNumber);
    let content = '';
    switch (cardNumber) {
      case 1:
        content = (
          <>
            <h2> Quality Food<img src={dogpaw} /></h2>
            <ul>
                <li>Made from premium, natural ingredients.</li>
                <li>Focused on providing balanced nutrition for pets.</li>
                <li>Ensures pets' health, vitality, and happiness.</li>
                <li>Strict quality control for food safety and freshness.</li>
            </ul>
          </>
        );
        break;
      case 2:
        content = (
          <>
            <h2>Customer Commitment<img src={dogpaw} /></h2>
            <ul>
                <li>Dedicated to exceptional customer service.</li>
                <li>Personalized solutions tailored to customer needs.</li>
                <li>Building long-lasting relationships with pet owners.</li>
                <li>Offering trusted, high-quality products.</li>
                
            </ul>
          </>
        );
        break;
      case 3:
        content = (
          <>
            <h2>Compassion for Pets<img src={dogpaw} /></h2>
            <ul>
                <li>Prioritizing pets' well-being and happiness.</li>
                <li>Providing safe, nurturing products.</li>
                <li>Focused on enhancing pets' quality of life.</li>
                <li>Advocating for pet care and safety in every product.</li>
            </ul>
          </>
        );
        break;
      default:
        content = <p>No content available.</p>;
        break;
    }
    setModalContent(content);
    console.log('model content :',content);
    setIsModalOpen(true);
    console.log('model state:',isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="about">
      <div className="overlay">
        <h2># Who We Are</h2>
        <p>Our mission is to bring joy to pets and their owners by providing the best products and care.</p>
      </div>

      <div className="contain">
        <p>
          At Woofit Pet Store, we believe pets are family. We’re dedicated to providing everything your furry friends
          need, from nutritious food and fun toys to grooming supplies and comfy accessories. Whether you're a new pet
          parent or a seasoned one, we’re here to support you with high-quality products and expert advice.
        </p>

        <div className="video-container">
          <video width="600" autoPlay muted loop>
            <source src={myVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <h2 className="our-values">Our Values</h2>
      <div className="values">
        <div className="card-container">
          <div className="card" onClick={() => openModal(1)}>
            <img src={quality} alt="Card Image 1" />
            <div className="card-title">Quality Food</div>
          </div>
          <div className="card" onClick={() => openModal(2)}>
            <img src={customer} alt="Card Image 2" />
            <div className="card-title">Customer Commitment</div>
          </div>
          <div className="card" onClick={() => openModal(3)}>
            <img src={compassion} alt="Card Image 3" />
            <div className="card-title">Compassion for Pets</div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-btn" onClick={closeModal}>
                &times;
              </span>
              <div className="modal-body">{modalContent}</div>
            </div>
          </div>
        )}
      </div>

      <h2 className="our-team">Our Team</h2>
      <div className="team">
        <div className="team-images">
          <div className="team-profile">
            <img className="photo" src={team1} alt="Team 1" />
            <img className="photo" src={team2} alt="Team 2" />
            <img className="photo" src={team8} alt="Team 8" />
          </div>
          <div className="team-profile">
            <img className="photo" src={team4} alt="Team 4" />
            <img className="photo" src={team5} alt="Team 5" />
            <img className="photo" src={team3} alt="Team 3" />
          </div>
          <div className="team-profile">
            <img className="photo" src={team6} alt="Team 6" />
            <img className="photo" src={team7} alt="Team 7" />
            <img className="photo" src={team9} alt="Team 9" />
          </div>
        </div>

        <div className="team-desc">
          <p>
            Experienced and Knowledgeable: With years of experience in the pet care industry, our staff is well-equipped
            to guide you in choosing the best products for your pets. Whether it's pet nutrition, grooming, or training
            tips, we are here to help.
          </p>
          <p>
            Friendly and Compassionate: We believe in treating every pet and pet owner like family. Our team is not only
            friendly but deeply compassionate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
