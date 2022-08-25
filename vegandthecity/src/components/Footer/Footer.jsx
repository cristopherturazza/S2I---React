import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-copy">
        <small>
          By Cristopher Turazza - 2022 - start2impact React Course Project
        </small>
      </div>
      <div className="footer-links-container">
        <a href="https://www.instagram.com/christurazza" target="_blank">
          <FaInstagramSquare className="footer-link" />
        </a>
        <a
          href="https://www.linkedin.com/in/cristopher-turazza-0863a026/"
          target="_blank"
        >
          <FaLinkedin className="footer-link" />
        </a>
        <a href="https://github.com/cristopherturazza" target="_blank">
          <FaGithubSquare className="footer-link" />
        </a>
        <a
          href="https://talent.start2impact.it/profile/cristopher-turazza"
          target="_blank"
        >
          <IoRocketSharp className="footer-link" />
        </a>
      </div>
    </div>
  );
}
