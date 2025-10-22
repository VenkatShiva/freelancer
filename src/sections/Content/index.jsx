import { ContentComp } from "./styles";
import Introduction from "../Introduction";
import AboutMe from "../About";
import Experience from "../Experience";
import Skills from "../Skills";
import Contact from "../Contact";

function Content() {
  return (
    <ContentComp>
      <Introduction />
      <AboutMe />
      <Skills />
      <Experience />
      <Contact />
    </ContentComp>
  );
}

export default Content;
