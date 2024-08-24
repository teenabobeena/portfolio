import React from 'react'
import { Header } from '../../components/Header'
import '../about.css'

export const About = () => {
  return (
    <>
        <Header />
        <div id='about-wrapper'>
          <h1 className='about-title'>Hi, I'm Christina Williams</h1>
          <div className='text-wrapper'>
            <p className='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam debitis reiciendis, eaque laudantium saepe pariatur rem iste explicabo beatae maiores?</p>
          </div>
          <p id='hire-btn'><a href='#'>Work with me</a></p>
        </div>
    </>
  )
}
