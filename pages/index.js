import React from "react";
import { client } from "../lib/client";
import { Product, Footer,  } from "../components";
import Navbar from "../components/NavBar";
import Head from "next/head";
const Home = ({ products, bannerData }) => (
  <div>
    <Head>
      <title>Sacha Shopping</title>
      <meta property="og:title" content="Sacha Shopping" key="title" />
    </Head>
    <Navbar />
    <div className="heading">
      <div className="custom-shape-divider-top-1669022201">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="heading__title">
        <p className="word">Your Partner</p>
        <p className="word">To enjoy your music</p>
      </div>
    </div>

    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    {/* <MyImageList/> */}
    {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}
    <Footer />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
