import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout';

import HeaderImage from '../components/homeImage'
import HomeBodyContent from '../components/HomeBodyContent';
import AboutUs from '../components/AboutUs';
import MeetTheTeam from '../components/MeetTheTeam';

const IndexPage = () => (
  <Layout>
    <HeaderImage />
    <section className="text-center" id="services">
      <HomeBodyContent />
    </section>
    <section id="about">
      <AboutUs />
    </section>
    <section id='meettheteam'>
      <MeetTheTeam />
    </section>
  </Layout >
);

export default IndexPage;
