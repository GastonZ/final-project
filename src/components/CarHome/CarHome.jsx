import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import "./carhome.css"
import AOS from 'aos';
import carsActions from '../../redux/actions/carsActions';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function CarHome(props) {

  let { id } = props

  let { getCars } = carsActions

  let dispatch = useDispatch()

  const { cars } = useSelector((state)=> state.cars)
  
  useEffect(()=>{
    dispatch(getCars())
    
  },[])


  return (
    <>

{cars.map((x)=>{

  return(
<main className='car-details-container' data-aos="fade-right" >
        <img className='car-details-img' src={x.image} alt="Model S" />
        <section className='car-details-title'>
          <h1 className='text-title-car'>{x.title}</h1>
        </section>
        <section >
        <Link to={`/details/:${x._id}`}>
        <button class="learn-more">
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">More info</span>
</button>
        </Link>
      </section>
      </main>
      
      
  )
})}


 
 
     
    
    
    
    
   
 
    </>

  )
}

export default CarHome