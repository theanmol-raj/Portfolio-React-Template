import React from 'react'

import About from '../Components/About';
import AreasOfIntrest from '../Components/AreasOfIntrest';
import Contact from '../Components/Contact';
import Project from '../Components/Project';
import Testimonials from '../Components/Testimonials';

function Homescreen() {
    return (
        <div>
            
      <About />
      <AreasOfIntrest />
      <Project />
      <Testimonials />
      <Contact />
        </div>
    )
}

export default Homescreen
