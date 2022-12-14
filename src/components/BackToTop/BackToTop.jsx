import React from 'react'
import "./BackToTop.css"
import { useEffect, useState } from 'react'
export default function AutoToTop() {

    const [backToTopButton,setBackToTopButton ]= useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY> 1600){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    }, [])
    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return <div className='App'>
    {backToTopButton && (
      <button className='autoTopButton' onClick={scrollUp}>
    <div class="text">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
    </div>
    <div className="clone">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
    </div>
    <svg width="20px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3">
</path>
</svg>
</button>
    )} 

  </div>
}
