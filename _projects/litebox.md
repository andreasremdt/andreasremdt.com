---
layout: project
title: Litebox
description: A modern, lightweight, accessible, responsive and touch-friendly lightbox to showcase your images.
link: https://andreasremdt.github.io/litebox/
published_in: 2018
published: true
technologies:
  - GitHub Pages
  - ES 2015
  - Babel
  - Gulp.js
---

After spending some time looking for a nice and simple lightbox solution, I was left surprised that almost all of them use jQuery. I didn't want to include jQuery in my projects anymore if not absolutely necessary. I'm not against jQuery per se, but in my opinion, we should prefer writing vanilla JavaScript to lower the bandwidth use and processing time of our websites.

Thanks to new EcmaScript standards, it is now easier than ever to build such things without any dependencies, so I decided to give it a go. I started to develop a custom lightbox without any third-party scripts with the goal of having the same functionality as existing solutions but below the limit of 15 KB. 

*Litebox* is the result of that work. It's an image-only lightbox with customization options (selectors, labels, controls, animations...) and weights around 12 KB. Being at version 0.8.3, it still is in development but can be used on websites today.

The JavaScript is written in modern EcmaScript 2015 and transpiles into more browser-compatible code thanks to [Babel](https://babeljs.io/){:target="_blank"}{:rel="noopener"}. All major browsers - including Internet Explorer 11 - support this script. The CSS is written in SCSS to give it a modular approach and can be completely swapped out. *Litebox* doesn't use any inline CSS and can, therefore, be customized as wished.

There are still a few things to do until it reaches version 1.0.0. I plan to implement support for other media such as videos or iframes.