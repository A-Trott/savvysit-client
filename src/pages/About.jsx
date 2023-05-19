import React from 'react';
import'@pages/About.scss'
import me from '@assets/images/me.jpg'

export default function About(){

  return (
      <section className="about-me" id="project-showcase__hero">
        <div className="about-me__div">

          <h1 className="">About Me</h1>
          <p>
            My name is Austin, and I have a passion for technology, travel, and animals. One of the ways that I can merge all of my interests together is by creating an app that tracks and keeps organized pet sitting data.
          </p>
          <p>
            If you would like to learn more about the future of this project or if you have any hiring prospects please feel free to reach out!
          </p>

        </div>
        <div className="about-me__div">

          <img src={me} alt="Austin" className="about-me__image"/>
        </div>
      </section>
  )
}