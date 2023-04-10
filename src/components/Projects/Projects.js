import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gym from "../../Assets/Projects/gym.png";
import TWITTER from "../../Assets/Projects/tweeter.png";
import Login from "../../Assets/Projects/loginregi.png";
import SALOON from "../../Assets/Projects/saloon.png";
import word from "../../Assets/Projects/word.png";
import CALENDER from "../../Assets/Projects/calender.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SALOON}
              isBlog={false}
              title="SALOON WEBSITE"
              description="its a Hair Saloon website , here user can login & register himself , and he can purchase different packages which are available , user can connect to the owner with email facility"
              ghLink="https://github.com/patilpavan786/SaloonWebsite.git"
              demoLink="https://saloon-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CALENDER}
              isBlog={false}
              title="CALENDER APP"
              description="Created a calendar app that enables users to add hourly, monthly, and yearly events and tag other registered app users."
              ghLink="https://github.com/patilpavan786/project4-calenderapp.git"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Login}
              isBlog={false}
              title="LOGIN/REGISTER - PORTAL"
              description="Users can register and login with the same credentials on this portal, and their information will be stored in local storage. Multiple users can register on the portal."
              ghLink="https://github.com/patilpavan786/login-registerportal.git"
              demoLink="https://login-registerportal.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="GYM WEBSITE"
              description="This gym website built with React, Recoil, and React Router Dom allows users to register, login, and purchase subscriptions."
              ghLink="https://github.com/patilpavan786/Project2-newnew.git"
              demoLink="https://project2-newnew.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={word}
              isBlog={false}
              title="Word Doc Clone"
              description="Created a Google Docs clone that includes features for text formatting, image insertion, and PDF file saving with custom naming"
              ghLink="https://github.com/patilpavan786/worddoc/tree/master/worldfile"
              //  demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TWITTER}
              isBlog={false}
              title="TWITTER CLONE"
              description="I developed a Twitter clone UI that replicates the platform's core features, including tweet and comment creation and liking."
              ghLink="https://github.com/patilpavan786/twitter-clone.git"
               demoLink="https://twitter-clone-seven-phi.vercel.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
