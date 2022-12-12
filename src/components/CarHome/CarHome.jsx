import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import "./carhome.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function CarHome() {



  return (
    <>
<main className='car-details-container' data-aos="fade-right" >
        <img className='car-details-img' src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/IJ7CWTDIPFAUXA4WKIVVHTQMTI.jpg" alt="Model S" />
        <section className='car-details-title'>
          <h1 className='text-title-car'>Model L</h1>
        </section>
        <section >
        <Link to="/Details">
        <button class="learn-more">
  <span class="circle" aria-hidden="true">
  <span class="icon arrow"></span>
  </span>
  <span class="button-text">More info</span>
</button>
        </Link>
      </section>
      </main>
      
      
 
 
     
    
    
    
    
   
 
    </>

  )
}

export default CarHome