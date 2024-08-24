import React from 'react'
import { CiMail } from 'react-icons/ci';
import { CiTwitter } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { Header } from '../../components/Header'
import '../contact.css'

export const Contact = () => {
  return (
    <>
        <Header />
        <h1 className='title'>See More</h1>
        <div className='link-wrapper'>
          <div className='contact-links'>
              <p><a href='mailto:christinas.codingemail@gmail.com'><CiMail /></a></p>
              <p><a href='https://twitter.com/chr1st1nac0des'><CiTwitter /></a></p>
              <p><a href='#'><FaGithub /></a></p>
              <p><a href='#'><SiCodewars /></a></p>
              <p><a href='#'><FaFreeCodeCamp /></a></p>
              <p><a href='#'><CiLinkedin /></a></p>
          </div>
        </div>
    </>
  )
}
