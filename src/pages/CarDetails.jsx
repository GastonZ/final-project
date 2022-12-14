import React, { useEffect, useState } from 'react'
import './carDetails.css'
import NavbarResponsive from '../components/Navbar/NavbarResponsive'
import CountUp from 'react-countup';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../api/url';
import axios from 'axios';
import { motion } from 'framer-motion'

function CarDetails() {

  let car = useParams()

  let [filter, setFilter] = useState([])
  const [reload, setReload] = useState(true)

  car = (car.id).slice(1)


  async function detailsCars() {
    await axios.get(`${BASE_URL}cars`)
    .then(response=>setFilter(response.data.response.find((x)=>x._id === car)))
  }

  useEffect(()=> {
    detailsCars()
  },[car])
  

  let { title, image, price, peakPower, milesPerSec, acceleration } = filter

  return (
    <>
{/*     <NavbarResponsive/> */}
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
    <main className='car-details-container'>
        <img className='car-details-img' src={image} alt={title} />
        <section className='car-details-title'>
          <p class="button-title-detail btn-shine">
            <span>{title}</span>
          </p>
{/*           <h1>Model S</h1> */}
        </section>
        <section className='car-specifications'>
          <div className='specifications-item'>
            <h2>1.99s</h2>
            <p>0-60 mph*</p>
          </div>
          <div className='specifications-item'>
            <h2><CountUp duration={4} end={milesPerSec}/> mph</h2>
            <p>Top Speed</p>
          </div>
          <div className='specifications-item'>
            <h2><CountUp duration={4} end={peakPower}/> hp</h2>
            <p>Peak Power</p>
          </div>
      </section>
      </main>
    <body className='car-details-body'>
      <section  className='specification-container'>
        <article className='specifications-card'>
          <div data-aos="zoom-in" data-aos-duration="2000" className='specification-article'>
            <h3>Sound</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reiciendis ea accusamus odit, quasi fugiat necessitatibus dolores minima, fuga excepturi recusandae illum pariatur saepe nisi ipsa non nesciunt hic ad.</p>
          </div>
          <img data-aos="fade-up" data-aos-duration="3000" className='specification-image' src="https://sm.pcmag.com/pcmag_me/news/t/toyota-rol/toyota-rolls-out-next-gen-plug-in-prius_jfcv.jpg" alt="" />
        </article>
      </section>
      <section  className='specification-container'>
        <article className='specifications-card specifications-card-reverse'>
          <div data-aos="zoom-in" data-aos-duration="2000" className='specification-article'>
            <h3>Wheels</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reiciendis ea accusamus odit, quasi fugiat necessitatibus dolores minima, fuga excepturi recusandae illum pariatur saepe nisi ipsa non nesciunt hic ad.</p>
          </div>
          <img data-aos="fade-up" data-aos-duration="3000" className='specification-image' src="https://www.motorbiscuit.com/wp-content/uploads/2021/09/GettyImages-1339287127-1024x683.jpg" alt="" />
        </article>
      </section>
      <section className='specification-container'>
        <article className='specifications-card'>
          <div data-aos="zoom-in" data-aos-duration="2000" className='specification-article'>
            <h3>Engine</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reiciendis ea accusamus odit, quasi fugiat necessitatibus dolores minima, fuga excepturi recusandae illum pariatur saepe nisi ipsa non nesciunt hic ad.</p>
          </div>
          <img data-aos="fade-up" data-aos-duration="3000" className='specification-image' src="https://fondosmil.com/fondo/89061.jpg" alt="" />
        </article>
      </section>
    </body>
    </motion.div>
 
    </>
  )
}

export default CarDetails