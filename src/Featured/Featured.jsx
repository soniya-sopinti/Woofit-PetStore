import './Featured.css'
import premium from '../assets/premium.jpg';
import toys from '../assets/toys.jpg';
import grooming from '../assets/grooming.jpg';

function Featured(){


    return (<>
    <div className="seconds">
      <div className="feature">
      <h2 className='title'>Why choose us ??</h2>
      <p className='sub-title'>Discover the exceptional services and <br/>care we provide for your pets</p>
      </div>
     
          <div className="feature-content">
            <div className="container">
              <img src={premium}/>
              <p>Top-Quality Ingredients for Your Pet's Health</p>
            </div>
            <div className="container">
              <p>Playtime Perfection: Toys That Delight</p>
              <img src ={toys}/>
            </div>
            <div className="container">
              <img src={grooming} />
              <p>Grooming Excellence for a Happy, Healthy Pet</p>
            </div>
          </div>
      
    
   
    </div>
    </>);
}


export default Featured