import React from 'react'
import { Header } from '../../components/Header'
import { FaArrowDown } from 'react-icons/fa'
import '../root.css'

export const Root = () => {
  return (
    <>
        <Header />
        <div id='root-wrapper'>
          <h1 className='main-title'>Hi, I'm Christina Williams</h1>
          <div id='desc-wrapper'>
            <p className='main-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam debitis reiciendis, eaque laudantium saepe pariatur rem iste explicabo beatae maiores?</p>
            <p id='resume'><FaArrowDown /> Download Resume (<a href='#'>pdf</a>)</p>
          </div>
        </div>
    </>
  )
}
