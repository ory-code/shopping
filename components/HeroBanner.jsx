import React from "react";

//import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  console.log(heroBanner);
  return (
    <div className="banner">
      <div className="banner__content">
      <img
          src={urlFor(heroBanner.image)}
          alt=""
          className="banner__image"
          />
      </div>
      <div className="banner__info">
        <h1 className="banner__title">{heroBanner.largeText1}</h1>
        <h2 className="banner__subTitle" >{heroBanner.largeText2}</h2>
        {/* <h3>{heroBanner.midText}</h3> */}
       
      </div>
    </div>
  );
};

  {/* <img src="https://my.spline.design/roomrelaxingcopy-0dabb635497335bc9c3ab49f2be274f1/" alt="" /> */}

  {/* <div>
    <Link href={`/product/${heroBanner.slug.current}`}>
      <button type="button">{heroBanner.buttonText}</button>
    </Link>
    <div className="desc">
      <h5>Description</h5>
      <p>{heroBanner.desc}</p>
    </div>
  </div> */}
export default HeroBanner;
