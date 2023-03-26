import React from "react";
import { FaGithub, FaYoutube, FaLinkedin, FaGlobe } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/codescalper" target="_blank">
        <FaGithub className="icon-git" />
      </a>
      <a href="https://www.youtube.com/@mhtcetshalamayanksingh" target="_blank">
        <FaYoutube className="icon-yt" />
      </a>
      <a
        href="https://www.linkedin.com/in/mayank-singh-613a41183/"
        target="_blank"
      >
        <FaLinkedin className="icon-ldin" />
      </a>
      <a href="https://mayankonweb.pages.dev/" target="_blank">
        <FaGlobe className="icon-wesbite" />
      </a>
    </footer>
  );
}

export default Footer;
