import React from 'react'
import CermatiLogo from '../../asset/img/cermati-logo.png'
import './index.stylesheet.css'

const HeroShot = () => {
  return (
    <div className="__wrHs1">
      <div className="__bg-w1" />
      <div className="__logo-wrapper">
        <div className="__logo">
          <img src={CermatiLogo} alt="Cermati Logo" className="__image-logo" />
        </div>
      </div>
      <div className="__bx-wr1">
        <div className="__c-1t">
          Hello! I'm Adi Hermawan
        </div>
        <div className="__c-1st">
          Consult, Design, and Develop Website
        </div>
        <div className="__desc-wR">
          <div className="__desc-1">
            Have something great in mind ? Feel free to contact me.
          </div>
          <div className="__desc-1">
            I'll help you to make it happen.
          </div>
        </div>

        <div className="__footer-desc">
          <div className="__btn __btn-border __btn-inline __btn-hover">
            Let's make contact
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroShot
