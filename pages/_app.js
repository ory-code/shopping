import React from 'react';


import { Layout } from '../components';
 import '../styles/globals.css';
 import "../styles/navbar.css"
 import "../styles/banner.css"
 import "../styles/mainPage.css"
 import "../styles/product.css"
 import "../styles/footer.css"
import "../styles/slug.css"
import "../styles/cart.css"

import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
   
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
