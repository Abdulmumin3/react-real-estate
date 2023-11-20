import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

import beach2 from "../assets/elizeu-dias-RN6ts8IZ4_0-unsplash.jpg";
export const About = () => {
  return (
    <div>
      <Hero cName="hero-mid" heroImg={beach2} title="About" />
      <AboutUs />
      <Footer />
    </div>
  );
};

// export default About;
