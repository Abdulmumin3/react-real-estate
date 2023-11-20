import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import beach3 from "../assets/alexander-andrews-A3DPhhAL6Zg-unsplash.jpg";
export const Contact = () => {
  return (
    <div>
      <Hero cName="hero-mid" heroImg={beach3} title="Contact" />
      <ContactForm />
      <Footer />
    </div>
  );
};

// export default Contact;
