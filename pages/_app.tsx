import React from "react";
import App from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

import { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer/Footer";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const GlobalStyle = createGlobalStyle`
      * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
      }
    `;

    return (
      <>
        <GlobalStyle />
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <Navbar />

        <Component {...pageProps} />
        {/* <Footer /> */}
      </>
    );
  }
}

export default MyApp;
