import "./FooterStyles.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Travlly</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div>
          <a href="/">
            <i><FaFacebookSquare /></i>
          </a>
          <a href="/">
            <i><FaInstagramSquare  /></i>
          </a>
          <a href="/">
            <i><FaBehanceSquare /></i>
          </a>
          <a href="/">
          <i><FaTwitterSquare /></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Projects</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
