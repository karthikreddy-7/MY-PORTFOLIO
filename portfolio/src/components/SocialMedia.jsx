import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://instagram.com/karthikredddyy" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/basupallykarthikreddy" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/karthikreddy-7" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
