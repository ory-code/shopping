import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {

const dt = new Date();
const year = dt.getFullYear();
  return (
    <div className="footer-container">
      <p>{year} Sacha Shop All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer