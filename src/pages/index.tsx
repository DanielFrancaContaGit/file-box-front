import React from 'react';
import Head from 'next/head';
import Container from '../components/container/container';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>File box</title>
      </Head>
      <Container />
    </div>
  );
};

export default Home;
