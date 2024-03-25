import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-center'>
<div className="hero-tittle">
    <h1>Contentful CMS</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Iste commodi aut accusamus tenetur modi quis distinctio
          velit fugit assumenda culpa doloribus ullam enim voluptatum,
           sint impedit ducimus optio rem officia!
    </p>
</div>
<div className="img-container">
    <img src={heroImg} alt='woman and the browser' className='img' />
</div>
        </div>

    </section>
  )
}

export default Hero