import "./HeroStyles.css";

const Hero = ({ cName, heroImg, title, text, url, btnClass, btnText }) => {
  return (
    <div className={cName}>
      <img
        alt="mount fuji"
        // style={{ width: "100%", height: "100vh" }}
        src={heroImg}
      />
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{text}</p>
        <a href={url} className={btnClass}>
          {btnText}
        </a>
      </div>
    </div>
  );
};

export default Hero;
