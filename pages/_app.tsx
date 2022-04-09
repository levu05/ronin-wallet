import React, { ReactElement } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { Layout } from '../components';

import 'antd/dist/antd.css';
import '../styles/index.scss';


function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <meta property='og:type' content='website' />
        <title>Ronin Wallet</title>
        <meta property='description' content='Ronin Wallet' />
        <link rel='icon' href='/static/images/logo.png' />
        <link href="/static/fonts/sf-pro-text-bold.ttf"  rel="stylesheet" />
        <link href="/static/fonts/sf-pro-text-semibold.ttf"  rel="stylesheet" />
        <link href="/static/fonts/sf-pro-text-regular.ttf"  rel="stylesheet" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
