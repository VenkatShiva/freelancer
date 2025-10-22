import { useRef } from "react";
import useOnIntersect from "../../hooks/intersection";
import { Header } from "../Experience/styles";
import { AboutMeCont, AboutCont } from "./styles";
import me from "../../assets/pngs/me.png";

function AboutMe() {
  const aboutRef = useRef(null);
  const show = useOnIntersect(aboutRef, 0.2);
  return (
    <AboutMeCont
      ref={aboutRef}
      className={`lazy-hide ${show ? "lazy-show" : ""}`}
      id="about-me"
    >
      <Header>About Me</Header>
      <AboutCont>
        <div className="prf-pic">
          <img src={me} alt="my profile pic" className="dp" />
          <span className="border-anim"></span>
        </div>
        <div className="prf-det">
          <p>
            Hello, I’m <b>Venkatashiva Avula</b>, but you can simply call me{" "}
            <b>Shiva</b>. I’m a <b>freelance Frontend Developer</b> specializing
            in building modern, responsive web applications using the{" "}
            <b>MERN stack - MongoDB, Express, React, and Node.js</b>.
          </p>
          <p>
            After several years of working in full-time software roles, I’ve now
            transitioned into freelancing, helping startups and businesses turn
            their ideas into smooth, scalable, and user-friendly products.
          </p>
          <p>
            I’m always excited to explore new technologies and apply them in
            real projects to deliver better performance and usability. I take
            ownership and pride in the work I do from concept to deployment.
          </p>
          <p>
            Outside of coding, I enjoy playing cricket, listening to music, and
            watching movies.
          </p>
        </div>
      </AboutCont>
    </AboutMeCont>
  );
}

export default AboutMe;
