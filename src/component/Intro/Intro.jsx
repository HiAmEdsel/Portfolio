import React from 'react'
import './Intro.css'
import Me from './apelogo.png'

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Edsel D</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Bassist</div>
                    <div className="i-title-item">Preacher</div>
                    <div className="i-title-item">YP Core Leader</div>
                </div>
            </div>
            <p className="i-desc">I design and develop services for customers of all sizes, speciallizing in creating styling, modern website, web services and online stores.</p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">
          <img src={Me} className="i-img" alt="..." />
        </div>
        
      </div>
    </div>
  )
}

export default Intro