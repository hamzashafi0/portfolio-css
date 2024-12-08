
"use client"
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';
import "../app/style/hero.css"

const Hero = () => {
  return (
    <div className="hero-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              I Am
              <br className="hidden-lg" />
              <Typewriter
                options={{
                  strings: ["Web Developer", "Programmer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="hero-description">
              Hi, I m Hamza, a hardworking and passionate individual on the path
              to becoming a web developer, with a strong interest in technology
              and creativity. I built this portfolio using Next.js and Tailwind
              CSS, and I m currently expanding my expertise in Next.js and React.
              I specialize in HTML, CSS, and JavaScript, with growing proficiency
              in TypeScript. I believe in continuous learning and enjoy working on
              projects that not only challenge me but also help enhance my skills
              both technically and creatively.
            </p>
          </div>
          <div className="hero-image">
            <Image
              className="hero-img"
              alt="hero"
              width={300}
              height={300}
              src={'/pic/profile picture.JPG'}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
