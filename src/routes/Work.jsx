import React from 'react'
import '../work.css'
import { Header } from '../../components/Header'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


export const Work = () => {

  return (
    <>
        <Header />
        <AwesomeSlider>
          <div className='work-wrapper'>
            <div className='title-wrapper'>
              <h1 className='work-title'>QR Card Component</h1>
              <p className='desc'>Completed this challenge from <a href='https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H'>Frontend Mentor</a>.</p>
            </div>
            <div className='img-wrapper'>
              <img className="work-pic" src='./src/qr-component.png'/>
            </div>
            <a className="work-links" href='https://github.com/teenabobeena/qr-card-component'>View Code</a>
            <a className="work-links" href='https://teenabobeena.github.io/qr-card-component/index.html'>View Site</a>
          </div>
          <div className='work-wrapper'>
            <div className='title-wrapper'>
              <h1 className='work-title'>Order Summary Component</h1>
              <p className='desc'>Completed this challenge from <a href='https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H'>Frontend Mentor</a>.</p>
            </div>
            <div className='img-wrapper'>
              <img className="work-pic" src='./src/order-summary-mobile.png'/>
            </div>
            <a className="work-links" href='https://github.com/teenabobeena/qr-card-component'>View Code</a>
            <a className="work-links" href='https://teenabobeena.github.io/index.html'>View Site</a>
          </div>
          <div className='work-wrapper'>
            <div className='title-wrapper'>
              <h1 className='work-title'>Price Grid Component</h1>
              <p className='desc'>Completed this challenge from <a href='https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H'>Frontend Mentor</a>.</p>
            </div>
            <div className='img-wrapper'>
              <img className="work-pic" src='./src/price-grid-1200.png'/>
            </div>
            <a className="work-links" href='https://github.com/teenabobeena/qr-card-component'>View Code</a>
            <a className="work-links" href='https://teenabobeena.github.io/index.html'>View Site</a>
          </div>
          <div className='work-wrapper'>
            <div className='title-wrapper'>
              <h1 className='work-title'>Order Summary Component</h1>
              <p className='desc'>Completed this challenge from <a href='https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H'>Frontend Mentor</a>.</p>
            </div>
            <div className='img-wrapper'>
              <img className="work-pic" src='./src/order-summary-mobile.png'/>
            </div>
            <a className="work-links" href='https://github.com/teenabobeena/qr-card-component'>View Code</a>
            <a className="work-links" href='https://teenabobeena.github.io/index.html'>View Site</a>
          </div>
        </AwesomeSlider>
    </>
  )
}