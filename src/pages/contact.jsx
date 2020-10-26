import React from "react";
import { Layout, ContactForm } from "../components";
import { PageHeader, Container } from "../primitives";

const ContactPage = () => (
  <>
    <Layout pageTitle="Contact">
      <PageHeader
        title="Contact"
        subtitle="Want to get in touch with me? Sweet! Just fill out the form and I'll get right back to you."
      />
      <Container>
        <ContactForm centered />
      </Container>
    </Layout>
  </>
);

export default ContactPage;
