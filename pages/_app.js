import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
 import '../styles/globals.css';
 import "../styles/navbar.css"
 import "../styles/banner.css"


import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
