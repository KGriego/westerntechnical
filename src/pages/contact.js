//Libraries
import React from 'react';
//SEO & Layout
import Layout from '../components/Layout';
import SEO from '../components/seo';
//Components
import ContactForm from '../components/ContactForm';

const ContactPage = () => (
  <Layout>
    <SEO title={'Contact Us'} />
    <ContactForm />
  </Layout>
);

export default ContactPage;
