import React, { useState } from "react";
import "../styles/Projects.css";
import Carousel from "./Carousel";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  const [isElementHovered, setIsElementHovered] = useState(false);
  return (
    <div id="projects" className="projects">
      <div className="projects-header">My Projects</div>
      <div className="project-cards">
        <Carousel
          isElementHovered={isElementHovered}
          setIsElementHovered={setIsElementHovered}
        >
          <div
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src="vialess.png" className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Vialess</span>
              <p>
                A new generation supply and connection network project that
                eliminates the digital and real intermediaries in which we were
                involved in the technical and bussines part, from the office and
                remotely, with my teammate for 5 months.
              </p>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://vialesss.web.app/"
                >
                  <FaLink />
                  <span>Web Link</span>
                </a>
              </div>
            </div>
          </div>
          <div
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src="youtline.png" className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Youtline</span>
              <p>
                This MERN-Stack application was our start-up project in the
                field of education-mentoring with my teammates. However, when we
                got closer, we stopped advancing the project. It was a good
                opportunity for us to repeat the technologies we learned and to
                work in coordination. Most functions in the app are operational.
                Codes contain part of the project.
              </p>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AhmetYasin07/Youtline"
                >
                  <FaGithub />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
          <div
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src="countdown.png" className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Countdown App</span>
              <p>
                An application with dual language support that we developed with
                my teammate using React for the MOIC 2022 event attended by 224
                delegates from 56 countries. This application has functions such
                as timer polling. Codes contain part of the project.
              </p>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://moic-countdown.netlify.app/"
                >
                  <FaLink />
                  <span>Web Link</span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AhmetYasin07/Countdown-App"
                >
                  <FaGithub />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
          <div
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src="blog.png" className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Freelance Blog App</span>
              <p>
                Freelance blog project that I developed with my teammate. We
                used React for front-end and Strapi for admin panel. We rented a
                virtual machine for this app and we ran the project using nginx
                and docker. It's the only project I've shared on GitHub as
                freelance. Codes contain part of the project.
              </p>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://suhedasen.com/"
                >
                  <FaLink />
                  <span>Web Link</span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AhmetYasin07/Blog-App"
                >
                  <FaGithub />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
          <div
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src="discord.jfif" className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Discord Frontend Clone</span>
              <p>
                This is the frontend clone of Discord. I built up this clone
                with my teammate without any frontend library. This is not a
                tutorial project. All codes are on our own.
              </p>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord-menn-clone.vercel.app/channels/@me"
                >
                  <FaLink />
                  <span>Web Link</span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Muteber-Community/discord-menn-clone"
                >
                  <FaGithub />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
          <div
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src="todoapp.png" className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>To-Do App</span>
              <p>
                This is an intermediate level To-Do App. I built up this app
                with my teammate. It includes various functions like
                categorization, pdf output etc. All codes are on our own.
              </p>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://todo-app-intermediate-snowy.vercel.app/"
                >
                  <FaLink />
                  <span>Web Link</span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Muteber-Community/Todo-App-Intermediate"
                >
                  <FaGithub />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
          <div
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src="toptancık.PNG" className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Toptancık Web App</span>
              <p>
                This is a web page for sale advertisement, including admin page.
                I built up this web page with my teammates. It is my first
                freelance experince. All codes are on our own.
              </p>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AhmetYasin07/Sale-Ad-Website"
                >
                  <FaGithub />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
