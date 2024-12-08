import React from 'react'
import { IoCheckboxOutline } from "react-icons/io5";
import "../app/style/skills.css"

const Skills = () => {
  return (
    <div id='skills'>
      <section className="skills-section">
        <div className="skills-container">
          <div className="skills-header">
            <h1 className="skills-title">My Skills</h1>
          </div>
          <div className="skills-list">
            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">
                  <IoCheckboxOutline className='skill-icon-text' />
                </div>
                <h2 className="skill-name">HTML</h2>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar">
                  <div className="skill-progress-fill" style={{ width: '90%' }}></div>
                </div>
                <p className="skill-percentage">90%</p>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">
                  <IoCheckboxOutline className='skill-icon-text' />
                </div>
                <h2 className="skill-name">CSS</h2>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar">
                  <div className="skill-progress-fill" style={{ width: '80%' }}></div>
                </div>
                <p className="skill-percentage">80%</p>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">
                  <IoCheckboxOutline className='skill-icon-text' />
                </div>
                <h2 className="skill-name">Typescript</h2>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar">
                  <div className="skill-progress-fill" style={{ width: '80%' }}></div>
                </div>
                <p className="skill-percentage">80%</p>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">
                  <IoCheckboxOutline className='skill-icon-text' />
                </div>
                <h2 className="skill-name">Next.js</h2>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar">
                  <div className="skill-progress-fill" style={{ width: '60%' }}></div>
                </div>
                <p className="skill-percentage">60%</p>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">
                  <IoCheckboxOutline className='skill-icon-text' />
                </div>
                <h2 className="skill-name">Tailwind CSS</h2>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-bar">
                  <div className="skill-progress-fill" style={{ width: '60%' }}></div>
                </div>
                <p className="skill-percentage">60%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
