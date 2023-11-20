import TripData from "./TripData";
import "./TripStyles.css";
import MtFuji from "../assets/Rectangle 77.png";
import Sydney from "../assets/Rectangle 84.png";
import China from "../assets/valentyn-chernetskyi-jUP7m4Svtus-unsplash.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={MtFuji}
          heading="Trip in Japan"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quis
          exercitationem, obcaecati enim deserunt, laboriosam cumque illum
          provident pariatur quae quidem architecto! Blanditiis qui consequatur
          doloremque. Maiores excepturi expedita repellendus itaque qui libero,
          optio voluptatum architecto dolores ullam repellat delectus
          exercitationem asperiores iusto? Ad maiores esse cupiditate modi dicta
          delectus exercitationem natus voluptatum quaerat voluptate quisquam
          "
        />
        <TripData
          image={Sydney}
          heading="Trip in Sydney"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quis
          exercitationem, obcaecati enim deserunt, laboriosam cumque illum
          provident pariatur quae quidem architecto! Blanditiis qui consequatur
          doloremque. Maiores excepturi expedita repellendus itaque qui libero,
          optio voluptatum architecto dolores ullam repellat delectus
          exercitationem asperiores iusto? Ad maiores esse cupiditate modi dicta
          delectus exercitationem natus voluptatum quaerat voluptate quisquam
          "
        />
        <TripData
          image={China}
          heading="Trip in China"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quis
          exercitationem, obcaecati enim deserunt, laboriosam cumque illum
          provident pariatur quae quidem architecto! Blanditiis qui consequatur
          doloremque. Maiores excepturi expedita repellendus itaque qui libero,
          optio voluptatum architecto dolores ullam repellat delectus
          exercitationem asperiores iusto? Ad maiores esse cupiditate modi dicta
          delectus exercitationem natus voluptatum quaerat voluptate quisquam
          "
        />
      </div>
    </div>
  );
};

export default Trip;
