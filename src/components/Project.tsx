"use client";


import React from "react";
import Image from "next/image";
import "../app/style/project.css"

const Projects = () => {
  return (
    <div id="project">
      <section className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <h1 className="projects-title">My Projects</h1>
          </div>

          <div className="projects-list">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <Image
                  alt="gallery"
                  className="project-img"
                  src={"/pic/Todo pic.PNG"}
                  width={300}
                  height={300}
                />
                <div className="project-overlay">
                  <h1 className="project-title">Todo App</h1>
                  <p className="project-description">
                    This is the project I ve created a Todo App using Next.js, Tailwind.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <Image
                  alt="gallery"
                  className="project-img"
                  src={"/pic/ramdan-removebg-preview.png"}
                  width={300}
                  height={300}
                />
                <div className="project-overlay">
                  <h1 className="project-title">Ramdan 2025 CountDown</h1>
                  <p className="project-description">
                    This is the project created a Ramdan CountDown using HTML, CSS, JavaScript
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-image">
                <Image
                  alt="gallery"
                  className="project-img"
                  src={"/pic/age-removebg-preview.png"}
                  width={300}
                  height={300}
                />
                <div className="project-overlay">
                  <h1 className="project-title">Age Calculator</h1>
                  <p className="project-description">
                    This is the project created an Age Calculator using HTML, CSS, JavaScript
                  </p>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card">
              <div className="project-image">
                <Image
                  alt="gallery"
                  className="project-img"
                  src={"/pic/pasward-removebg-preview.png"}
                  width={300}
                  height={300}
                />
                <div className="project-overlay">
                  <h1 className="project-title">Random Password Generator</h1>
                  <p className="project-description">
                    This is the project created a Password Generator using HTML, CSS, JavaScript
                  </p>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="project-card">
              <div className="project-image">
                <Image
                  alt="gallery"
                  className="project-img"
                  src={"/pic/w-removebg-preview.png"}
                  width={300}
                  height={300}
                />
                <div className="project-overlay">
                  <h1 className="project-title">Word Counter</h1>
                  <p className="project-description">
                    This is the project created a Word Counter using HTML, CSS, JavaScript
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
