//Libraries
import React from "react";
//SEO & Layout
import Layout from "../Components/Layout";
import SEO from "../Components/seo";
//Components
import ContactForm from "../Components/ContactForm";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <ContactForm />
  </Layout>
);

export default ContactPage;
