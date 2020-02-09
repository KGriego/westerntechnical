import React from 'react';

import Layout from '../components/Layout';

import HomeBodyContent from '../components/HomeBodyContent';
import AboutUs from '../components/AboutUs';
import MeetTheTeam from '../components/MeetTheTeam';
import HeaderImage from '../components/homeImage';

const IndexPage = () => (
  <Layout>
    <HeaderImage />
    <section className={'text-center'} id={'services'}>
      <HomeBodyContent />
    </section>
    <section id={'about'}>
      <AboutUs />
    </section>
    <section id={'meettheteam'}>
      <MeetTheTeam />
    </section>
  </Layout>
);

export default IndexPage;
