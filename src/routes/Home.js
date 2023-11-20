import Hero from "../components/Hero";
import Beach1 from "../assets/benjamin-voros-AD6rn3vqG7o-unsplash.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
export const Home = () => {
  return (
    <div>
      <Hero
        cName="hero"
        heroImg={Beach1}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnClass="show"
        btnText="Travel Plan"
        url="/"
      />
      <Destination />
      <Trip />
      <Footer />
    </div>
  );
};

// export default Home;
