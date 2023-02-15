import React from 'react'

import { Helmet } from 'react-helmet'

import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About-us - Perfumed Wobbly Goat</title>
        <meta property="og:title" content="About-us - Perfumed Wobbly Goat" />
      </Helmet>
      <div className="about-us-container1">
        <img
          alt="image"
          src="/playground_assets/happy-businessmen-looking-future%201-600w.jpg"
          className="about-us-image"
        />
        <span className="about-us-header">
          <span>About us</span>
        </span>
        <span className="about-us-sub">
          <span>
            “At orom,our existance is driven by one purpose,to make an impact
            that matters.We are a young team who are determined to revamp the
            day to day lives of people.Our responsibility and our goal is to
            provide you the best service to reach your favourite destination and
            to save the time in the cheapest price available.We stand out,as the
            mission for us is to bring the experience of rental system along
            with sustainability to customers around the town.Acknowledging you
            and your problems,it is this simple statement that defines each
            decision,each connections and drives us always.To uphold integrity
            and promote a culture of inlusion.To build better tomorrow!.”
          </span>
        </span>
        <div className="about-us-logo1"></div>
        <div className="about-us-logo2"></div>
      </div>
    </div>
  )
}

export default AboutUs
