import "./Destinationstyles.css";

const DestinationData = ({ heading, text, img1, img2, cName }) => {
  return (
    <div className={cName}>
      <div className="des-text">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="image">
        <img alt="idanre hills" src={img1} />
        <img alt="idanre hills" src={img2} />
      </div>
    </div>
  );
};

export default DestinationData;
