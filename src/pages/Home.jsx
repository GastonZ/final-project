import React from 'react'
import Main from '../components/Main/Main'
import Testimonials from '../components/testimonials/Testimonials'
import CarouselSwiperHome from '../components/CarouselSwiperHome/CarouselSwiperHome'
import CarHome from '../components/CarHome/CarHome'
import CarouselComments from '../components/CarouselComments/CarouselComments'
import { motion } from 'framer-motion'
import Carpng from '../components/carpng/Carpng'
export default function Home() {
  return (
    <>
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      <Main></Main>
      <Carpng></Carpng>
      <CarHome></CarHome>
      <CarouselSwiperHome></CarouselSwiperHome>
      
      <Testimonials></Testimonials>
<CarouselComments></CarouselComments>
    </motion.div>

 </>
  )
}
