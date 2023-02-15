import React from 'react'

import { Helmet } from 'react-helmet'

import './what-are-we.css'

const WhatAreWe = (props) => {
  return (
    <div className="what-are-we-container">
      <Helmet>
        <title>what-are-we - Perfumed Wobbly Goat</title>
        <meta
          property="og:title"
          content="what-are-we - Perfumed Wobbly Goat"
        />
      </Helmet>
      <div className="what-are-we-landing-page">
        <div className="what-are-we-logo1"></div>
        <div className="what-are-we-logo2"></div>
        <span className="what-are-we-heading1">
          Acknowledging you and your problems!
        </span>
        <span className="what-are-we-text">
          One dream, one team and an incandescent need to strive for a hopeful
          tomorrow. We spot loopholes and uproot them using our nurtured
          expertise. Here at Orom, sustainability spearhead’s our projects
          because providing service, is what we are excellent at.
        </span>
        <div className="what-are-we-button1"></div>
      </div>
      <div className="what-are-we-i-n-t1">
        <span className="what-are-we-header">
          <span>WHAT WE CREATE</span>
        </span>
        <span className="what-are-we-t1">1. CONVINIENCE</span>
        <span className="what-are-we-s1">
          <span>
            <span>
              We have carefully designed and curated our product to up the game
              in the rental industry. We have developed an in house geo tagging
              device integrated with our own developed app
            </span>
            <br></br>
            <span>
              which will ensure the users a comfortable experience and help them
              to rent cycles seamlessly.
            </span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className="what-are-we-t2">2. INNOVATION</span>
        <span className="what-are-we-s2">
          <span>
            The new meta in the cycle rental systems is brought by us and our
            team. The geo tagging device will help live tracking of the cycles
            and the user which combined with new edge technology would bring in
            standards in this industry.
          </span>
        </span>
      </div>
      <div className="what-are-we-i-n-t2">
        <span className="what-are-we-t3">
          <span>
            <span>3. USER FRIENDLY</span>
            <br></br>
            <span> EXPERIENCE</span>
          </span>
        </span>
        <span className="what-are-we-s3">
          <span>
            <span>
              The in house developed app provides a tailor made experience for
              our users as we manage to give a very easy to use navigation and
              user interface. our dev has worked day in day out to bring these
              advancements to the market and we&apos;ll proudly showcase them.
            </span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className="what-are-we-t4">
          <span>4. INFRASTRUCTURE</span>
        </span>
        <span className="what-are-we-s4">
          <span>
            On the hardware part, we have partnered to have the most
            ergonomically designed cycles which will inculcate our geo tagging
            facility to upgrade the user experience as well the comfortability.
          </span>
        </span>
      </div>
      <div className="what-are-we-i-n-t3">
        <span className="what-are-we-t5">
          <span>5. PROFESSIONAL</span>
        </span>
        <span className="what-are-we-s5">
          <span>
            <span>
              We&apos;ve had lead developers from top engineering colleges work
              with us and provide you with the all new rental system facilities
              that awaits you. We are proud to have develop this innovation and
              contribute what we needed to for the advancements in this
              field.And we are very delighted to be the pioneers of this
              revolution
            </span>
            <br></br>
            <span></span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default WhatAreWe
