import React from "react";
import { css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { Layout, Hero, ContactForm } from "../components";
import { Container, Heading, Link, Card } from "../primitives";
import useProjects from "../hooks/use-projects";

const HomePage = () => {
  const projects = useProjects(4);

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "new-message.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <>
      <Layout>
        <Hero />

        <Container
          css={css`
            margin-top: 8rem;
            margin-bottom: 8rem;
          `}
        >
          <Heading Level="h2">About Me</Heading>
          <div
            css={css`
              column-count: 2;
            `}
          >
            <p
              css={css`
                margin-top: unset;
              `}
            >
              Starting my career as a Web Developer 5 years ago, I currently
              work as a Software Engineer at{" "}
              <Link href="https://camunda.com">Camunda</Link>, where I try my
              best to make{" "}
              <Link href="https://cawemo.com/">
                one of our cloud applications
              </Link>{" "}
              look and feel good.
            </p>

            <p>
              My preferred area of expertise lies within the frontend; taming
              React state, making CSS look good in all browsers, putting boring
              JSON APIs into a beautiful UI, and all that other stuff.
            </p>

            <p>
              My framework of choice is React, but I am not limited to that.
              Making websites look good for all people in all browsers on all
              devices doesn't depend on the choice of framework for me; it's the
              result that counts.
            </p>

            <p>
              Outside of the matrix, I love being in nature and taking photos of
              beautiful landscapes. Oh, and I am also an okay cook.
            </p>
          </div>
        </Container>

        <section
          css={css`
            background-color: var(--light-yellow);
            padding: 8rem 0;
          `}
        >
          <Container>
            <Heading Level="h2">Selected Work</Heading>
            {projects.map((project, index) => (
              <Card key={project.slug} order={index + 1} project={project} />
            ))}
          </Container>
        </section>

        <section
          css={css`
            padding: 8rem 0;
            background-image: url(${image.publicURL});
            background-repeat: no-repeat;
            background-position: center left calc(100vw / 2 + 70px);
            background-size: 500px;
          `}
        >
          <Container>
            <Heading Level="h2">Contact Me</Heading>
            <p
              css={css`
                margin: -25px 0 4rem;
              `}
            >
              Want to get in touch with me? Sweet! Just fill out the form and
              I'll get right back to you.
            </p>

            <ContactForm />
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default HomePage;
