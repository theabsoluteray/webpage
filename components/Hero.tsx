import React from 'react'
import { Spotlight } from './Spotlight'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill='white'/>
      <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw] "fill='blue'/>
      <Spotlight className="-top-28 -left-80 md:-left-32 h-[80vh] w-[50vw]" fill='purple'/>
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    </div>
    <div className="flex justify-center">
      <div className="max-w-[89vw]">
      </div>
    </div>
    </div>
  )
}

export default Hero