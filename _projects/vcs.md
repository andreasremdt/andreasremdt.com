---
layout: project
title: Vitra VCS
description: The Vitra Configuration System is a collection of software to plan 3D spaces using furniture from Vitra.
link: http://vcs.vitra.com
published_in: 2016
published: true
technologies:
  - Node.js
  - Express.js
  - Nunjucks
  - i18n
---

I developed this site from scratch for my old employer to showcase a software for architects and designers, used for the 3D planning of house interior. It was meant to replace a very old, outdated and not-good-to-look-at website published many years ago.

This was my first ever project using Node.js. I had almost no prior experience with this framework and had to learn a lot about its architecture, best practices and so on.

The frontend is responsive (with a design based on the company's CI) and offers various resources to visitors, such as tutorials, downloads, and a contact form. On the backend, I used Express with middleware. The website is available in two languages through [i18n](https://github.com/mashpie/i18n-node){:rel="noopener"}{:target="_blank"} and highly performant because of Node's asynchronous nature. The view templates are assembled with the [Nunjucks](https://mozilla.github.io/nunjucks/){:rel="noopener"}{:target="_blank"} templating engine and distinguish between internal and external IP addresses, displaying appropriate content depending on whether a visitor is an employee of the company or not.

Instead of using a database, I decided the store the texts in separate JSON files, which are loaded dynamically in the templating engine based on what language is selected.

The website features many video tutorials I produced and other content that helps people to understand and learn the presented software product, called VCS. In case of problems, visitors can send a ticket directly to the companies' ticket system using the embedded form.