
import React from 'react'

import marca1 from "./pirelli.png"
import marca2 from "./red.png"
import marca3 from "./god.png"
import './testi.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function Testimonials() {
  return (
    <> 

    <div data-aos="fade-right" data-aos-duration="1000"
  

 className="supremee">


<div href="#" class="c-preview">
  <div className="c-preview__image"></div>
  <div className="c-preview__info">
    <h2 className="c-preview__title">Shop</h2>
    <ul className="c-preview__stats">
      <li>The best items</li>Name
      <li>Are here</li>
    </ul>
  </div>
</div>
    </div>
    <div className='marcaContainer'>
<img className='marca-img' src={marca1} alt="" />
<img  className='marca-img' src={marca3} alt="" />
<img className='marca-img' src={marca2} alt="" />
    </div>
    </>
  )
}

export default Testimonials

