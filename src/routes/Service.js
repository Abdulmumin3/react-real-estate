import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import beach4 from "../assets/justin-eisner-ZOG7Zj7cfR8-unsplash.jpg";
export const Service = () => {
  return (
    <div>
      <Hero cName="hero-mid" heroImg={beach4} title="Service" />
      <Trip />
      <Footer />
    </div>
  );
};

// export default Service;
