import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
const Footer = () => {
  const dt = new Date();
  const year = dt.getFullYear();
  return (
    <div className="footer__container">
      <div className="footer__content">
        <p className="footer__title"> Sacha Shopping {year} </p>

        <div className="footer__info">
          <Link href="https://github.com/" target="_blank">
            <GitHubIcon sx={{ fontSize: 30 }} />
          </Link>
          <ul>
            <li>Code by Sacha</li>
            <Link
              href="https://www.linkedin.com/in/sacha-ory-developer/"
              target="_blank"
            >
              <LinkedInIcon sx={{ fontSize: 30 }} />
            </Link>
            <Link href="https://www.sanity.io/" target="_blank">
              <li>Sanity for the CMS</li>
            </Link>
            <Link href="https://stripe.com/fr-be" target="_blank">
              <li>Stripe for the payment</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
