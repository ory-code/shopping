import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { client } from "../lib/client";
import { HeroBanner, Product, FooterBanner } from "../components";
const Home = ({ products, bannerData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping Sacha</title>
        <meta name="description" content="App code by Sacha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h1>Nos meilleurs ventes 😄 </h1>
        <p>Tes meilleurs amis pour écouter du son de fou </p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product.id} product={product} />)}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0] } />
    </div>
  );
};

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
