import React from 'react'

import { Helmet } from 'react-helmet'

import './feedback.css'

const Feedback = (props) => {
  return (
    <div className="feedback-container">
      <Helmet>
        <title>feedback - Perfumed Wobbly Goat</title>
        <meta property="og:title" content="feedback - Perfumed Wobbly Goat" />
      </Helmet>
      <div className="feedback-container1">
        <div className="feedback-logo1"></div>
        <div className="feedback-logo2"></div>
        <span className="feedback-des">
          <span>Whats on your mind, because we are here to </span>
          <span>
            help. Tell us what you are looking for and we&apos;ll connect 
          </span>
          <span>you to the right people.</span>
          <br></br>
          <span>
            We&apos;ve driven growth and purposeful transformation across 
          </span>
          <span>
            our company. Contact us to become the part of the process 
          </span>
          <span>and the all the links will be posted beneath the content.</span>
        </span>
        <div className="feedback-social-media">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="feedback-link"
          >
            <svg viewBox="0 0 877.7142857142857 1024" className="feedback-icon">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="feedback-link1"
          >
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="feedback-icon2"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="feedback-link2"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="feedback-icon4"
            >
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
          </a>
        </div>
        <img
          alt="Rectangle40211726"
          src="/playground_assets/rectangle40211726-8nx-900w.png"
          className="feedback-rectangle4021"
        />
        <form
          id="form"
          name="form"
          target="self"
          enctype="text/plain"
          className="feedback-feedback-form"
        >
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter name"
            className="feedback-textinput input"
          />
          <input
            type="email"
            id="mail"
            name="mail"
            pattern="+@gmail.com"
            required
            placeholder="________@gmail.com"
            className="feedback-textinput1 input"
          />
          <textarea
            placeholder="feedback"
            className="feedback-textarea textarea"
          ></textarea>
          <button
            id="submit"
            name="submit"
            type="submit"
            autoFocus
            className="feedback-button button"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Feedback
