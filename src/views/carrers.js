import React from 'react'

import { Helmet } from 'react-helmet'

import './carrers.css'

const Carrers = (props) => {
  return (
    <div className="carrers-container">
      <Helmet>
        <title>Carrers - Perfumed Wobbly Goat</title>
        <meta property="og:title" content="Carrers - Perfumed Wobbly Goat" />
      </Helmet>
      <div id="carrers" className="carrers-container1">
        <div className="carrers-logo1"></div>
        <div className="carrers-logo2"></div>
        <img
          alt="image"
          src="/playground_assets/image-f09r-800w.png"
          className="carrers-image"
        />
        <span className="carrers-header">
          <span>CAREERS</span>
        </span>
        <span className="carrers-sub">
          <span>
            <span>
              “Whatever you desire we provide: yesterday’s hope, tomorrow’s
              vision”.
            </span>
            <br></br>
            <span></span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default Carrers
