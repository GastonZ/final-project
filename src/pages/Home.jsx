import React from 'react'
import Main from '../components/Main/Main'
import Testimonials from '../components/testimonials/Testimonials'
import CarouselSwiperHome from '../components/CarouselSwiperHome/CarouselSwiperHome'
import CarHome from '../components/CarHome/CarHome'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
    <motion.div
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth, transition: { duration: 1}}}>
      <Main></Main>
      
      <CarouselSwiperHome></CarouselSwiperHome>
      <Testimonials></Testimonials>
      <CarHome></CarHome>
    </motion.div>

 </>
  )
}
