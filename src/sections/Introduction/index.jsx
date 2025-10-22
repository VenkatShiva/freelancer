import { IntroComp, BtnStyle } from "./styles";
import Button from "../../components/Button";

function Introduction() {
  const onViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1XfBo7QKVpaiQzNv-WtdpyR2b7fM4AUgJ/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <IntroComp>
      <h3 className="my-name-is lazy-load">Hi, my name is</h3>
      <h1 className="name lazy-load">Venkatashiva Avula</h1>
      <h2 className="desg lazy-load">
        {"<>"} Freelance Front-End Developer {"</>"}
      </h2>
      <p className="description lazy-load">
        Dedicated freelance frontend developer, having transitioned from a
        successful full-time career to freelancing. With over 7 years of
        experience building scalable web applications and enterprise-grade
        tools, I now partner with startups and businesses to deliver
        high-quality, performant, and user-centric web solutions that drive real
        results.
      </p>
      <Button
        className="lazy-load"
        css={BtnStyle}
        text={"View Resume"}
        onClick={onViewResume}
      />
    </IntroComp>
  );
}

export default Introduction;
