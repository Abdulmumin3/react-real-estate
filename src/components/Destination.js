import DestinationData from "./DestinationData";
import "./Destinationstyles.css";
import Idanre from "../assets/olayinka-oladotun-FnVbYbTbE_E-unsplash.jpg";
import Rock1 from "../assets/ronen-abudi-6eQBI4GXKK4-unsplash.jpg";
import BarBeach1 from "../assets/elizeu-dias-RN6ts8IZ4_0-unsplash.jpg";
import BarBeach2 from "../assets/benjamin-voros-AD6rn3vqG7o-unsplash.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        cName="first-des"
        heading="Idanre Hills, Idanre"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quis
          exercitationem, obcaecati enim deserunt, laboriosam cumque illum
          provident pariatur quae quidem architecto! Blanditiis qui consequatur
          doloremque. Maiores excepturi expedita repellendus itaque qui libero,
          optio voluptatum architecto dolores ullam repellat delectus
          exercitationem asperiores iusto? Ad maiores esse cupiditate modi dicta
          delectus exercitationem natus voluptatum quaerat voluptate quisquam
          consequuntur obcaecati corrupti deserunt fugit ut, cum omnis
          perferendis rerum eaque? Enim, numquam blanditiis cum id aliquid
          quisquam tempore incidunt accusantium? Consequuntur illo et iusto,
          quod optio, excepturi officia, laborum vel quae minima provident enim
          reiciendis dolores totam voluptate distinctio cum dolorum recusandae
          commodi?"
        img1={Idanre}
        img2={Rock1}
      />
      <DestinationData
        cName="first-des-reverse"
        heading="Whispering Palms, Badagry"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quis
          exercitationem, obcaecati enim deserunt, laboriosam cumque illum
          provident pariatur quae quidem architecto! Blanditiis qui consequatur
          doloremque. Maiores excepturi expedita repellendus itaque qui libero,
          optio voluptatum architecto dolores ullam repellat delectus
          exercitationem asperiores iusto? Ad maiores esse cupiditate modi dicta
          delectus exercitationem natus voluptatum quaerat voluptate quisquam
          consequuntur obcaecati corrupti deserunt fugit ut, cum omnis
          perferendis rerum eaque? Enim, numquam blanditiis cum id aliquid
          quisquam tempore incidunt accusantium? Consequuntur illo et iusto,
          quod optio, excepturi officia, laborum vel quae minima provident enim
          reiciendis dolores totam voluptate distinctio cum dolorum recusandae
          commodi?"
        img1={BarBeach1}
        img2={BarBeach2}
      />
    </div>
  );
};

export default Destination;
