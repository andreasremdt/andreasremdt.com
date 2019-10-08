---
layout: post
title:  Well-structured, clean CSS without dependencies
date:   2019-06-03 19:32:15 +0200
---

***Disclaimer:** The following article reflects my personal opinion and experiences and is in no way meant to badmouth certain libraries, tools or developing styles.*

Beauty is considered to be a subjective thing — everybody defines and sees it in a different way. Every time I code something, I don’t just strive to make my applications look beautiful on the outside, but also the code that powers them. Having ugly, bloated or badly documented code is a no-go for me.

However, especially in HTML and CSS, I have recently noticed a shift. Since mayor libraries like React have gained popularity, the classic ways of writing CSS and HTML are being swapped with tools like [styled-components](https://www.styled-components.com/) or [emotion](https://emotion.sh/docs/introduction), commonly known as CSS-in-JS.

## What’s the issue?

But the more I work with these technologies, the more I miss the “good old” days where HTML was just HTML and CSS was just CSS. In my current job, the team I work with uses React and styled-components, which powers our entire frontend. It works, but there are certain things I dislike:

* Having to install and ship dependencies, which increases app complexity and bundle size. Also having to learn each libraries’ API, syntax and quirks, although I just want to style something.

* The generated output is oftentimes messy, with unreadable class names and many unnecessary overrides.

* Mayor version updates may require some work since they can introduce breaking API changes.

* Inconsistent architecture. The product I work on uses Material UI, styled-components and LESS. In other words, 3 different ways of writing CSS, and I don’t like having to use them all together instead of just one. I also witnessed specificity issues between these, since 2 CSS-in-JS engines inject their styles into the head, but without knowing which one is overriding the other.

* It feels weird writing CSS in JavaScript, without having proper syntax highlighting out of the box (and yes, I know that there are [solutions](https://github.com/styled-components/vscode-styled-components) available — it still doesn’t feel right).

* Having less control over the outcome. styled-components, for example, automatically adds vendor prefixes, which I don’t need since I don’t want to support older browsers. Why can’t I disable them? They just increase file size and slow down CSS parsing.

I am fully aware that these are not always problems of the tools themselves (which also keep improving day after day, just look at the latest release of [Material UI](https://material-ui.com/blog/material-ui-v4-is-out/)), but rather how we decide to use them. Still, I feel like I don’t need these things to style my applications. Having features like conditionally rendered CSS is nice, but not that big of a deal for me.

That’s why — after gaining these experiences — I don’t use any of these technologies in my personal projects anymore, instead, I prefer a clean approach of clearly structured and separated CSS. Let’s have a look, shall we?

## Naming things

A few years ago, when I was looking for ways to organize my CSS, I came across something called [rscss](https://rscss.io). This is not a framework nor a library, but a collection of ideas that will help you to keep your CSS clean and well-organized.
> # A set of simple ideas to guide your process of building maintainable CSS. — [https://rscss.io](https://rscss.io/index.html)

If you want to compare it to something, have a look at [BEM](http://getbem.com/), [SMACSS](http://smacss.com/) or [Atomic CSS](https://acss.io/). All of these are methodologies rather than ready-to-use frameworks and each provides its very own set of ideas on how a CSS codebase should look like.

I have worked with the BEM approach before, but disliked how quickly your markup becomes bloated by long class names:

{% highlight html %}
<a class="button button--state-danger button--state-disabled">
  <svg class="button__icon button__icon--size-big"></svg>
</a>
{% endhighlight %}

Although I appreciate the clear structure and visual separation of blocks, elements, and modifiers, I find above code ugly and just too much for what it achieves.

{% highlight html %}
<custom-dropdown></custom-dropdown>
{% endhighlight %}

Look at the above example of a [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements). The HTML specification explicitly requires words to be separated by dashes; not underscores, not double-dashes, nor anything else. Ideally, I’d like my classes and ids to follow this scheme, even though technically it doesn’t matter.

Let’s look at the button example again, now with the *rscss* approach:

{% highlight html %}
<a class="button -danger -disabled">
  <svg class="icon -big"></svg>
</a>
{% endhighlight %}

See how much clearer this looks? I have basically achieved the same thing, but it looks a lot cleaner to me now. More in line with the HTML, I’d say.

## Structure with components

When using *rscss*, a good practice is to split your application into components. An example of a component could be the page’s navigation:

{% highlight html %}
<nav class="main-navigation">
  <a class="logo" href="/">Company XY</a>

  <a class="link -active" href="about.html">About Us</a>
  <a class="link" href="products.html">Products</a>
  <a class="link" href="contact.html">Contact Us</a>
</nav>
{% endhighlight %}

Component classes should contain at least 2 words, separated by dashes. Element classes inside a component, such as a logo or links, should only contain one word. Try to avoid nesting HTML as much as possible, as it makes styling and semantics more difficult.

{% highlight css %}
.main-navigation {
  > .logo {...}
  > .link {...}
  > .link.-active {...}
}
{% endhighlight %}

Element modifiers are marked by dashes in front of their names, such as 
-active. This syntax is oriented at how parameters are passed into the terminal on UNIX systems and means that the element’s base styles will be overridden with something else. Modifiers are useful for different variants of buttons or other components.

Another common thing in CSS are helper classes. A helper class should only have one purpose, such as aligning items or resetting margin. Helper classes in *rscss* begin with an underscore and don’t contain dashes: _nomargin or _aligncenter. The underline makes them look undesirable, which is the idea: they ought to be used sparingly across your codebase, as your layout should ideally be made up of reusable and configurable components.

## Organizing the CSS

CSS can still get messy, especially once you have a few hundred lines of it. That’s why it’s a good idea to not have all of your CSS in one huge file, but rather many smaller ones.

If you have used SASS or LESS before, you are most likely familiar with [imports](https://sass-lang.com/documentation/at-rules/import). They easily allow you to separate your styles across as many files as you like, loading them all in on compilation:

{% highlight scss %}
@import "buttons";
@import "inputs";
@import "titles";
{% endhighlight %}

I highly recommend doing so. In my projects, I always try to enforce a descriptive folder structure, which could look like this:

```
css/
  components/
    buttons.scss
    inputs.scss
    headings.scss
  pages/
    about.scss
    index.scss
  base/
    reset.scss
    typography.scss
    variables.scss
```

My rule of thumb is that one CSS or SCSS file should only be responsible for one thing, for example, a button, the typography or the section of a page. This way, my files are kept small and maintainable, while I always know exactly where to look in case I need to do changes.

There are [many great tutorials ](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization)out there, giving advice and best practices on how to structure CSS, SCSS or LESS. My tip is to go for an architecture that makes you happy and is in line with your project. You might not always need a themes folder, so skip it. You might not want to have a stylesheet for each page, so don’t do it. Nobody is forcing you to exactly copy these ideas, but rather adapt and customize them.

If you want to read more about SCSS/SASS best practices, [here you go](https://sass-guidelin.es/).

## Writing CSS without a preprocessor

While I absolutely love SCSS, I find that in recent projects I didn’t need it anymore, at least when I didn’t have to support older browsers. That’s when I stuck to plain CSS, which recently has introduced features like [variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) (or better known as custom properties). Even [nesting is coming](https://drafts.csswg.org/css-nesting-1/), too!

But how do I compile all the single CSS files into one big chunk, ready to be served as the main styles.css? Well, I don’t!

Instead, I put my link tags to each file directly in the body of my HTML, where and when I need it:

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="/css/global.css">
  </head>
  <body>
    <link rel="stylesheet" href="/css/components/header.css">
    <header class="main-header"></header>

    <link rel="stylesheet" href="/css/components/navigation.css">
    <nav class="main-navigation"></nav>

    <!-- and so on... -->
  </body>
</html>
{% endhighlight %}

This technique was not valid in the past, as the HTML spec didn’t allow link elements inside the body (it’s still a gray area, though). However, browsers are now capable of working with it, which gives us an opportunity. Jake Archibald has a really [nice blog post](https://jakearchibald.com/2016/link-in-body/) going into the details and providing some insights.

These are the advantages I have made out personally:

* There’s no need to “compile” single CSS files into a big one since we can directly use them in our HTML.

* Thanks to HTTP 2, loading many smaller files is more performant than loading a big, single one.

* We only load the styles needed. If I’m on the “About” page, I just include CSS from about.css, and maybe a few components or global styles. This improves page loading and rendering.

* It’s more clear what CSS belongs to a certain part of the HTML. Putting the link above your header will most likely tell you that its styling is inside this very file, instead of having to look through a potentially big folder first.

* Thanks to CSS custom properties, I usually define my variables in global.css, which is loaded on every page inside the <head>. I now have access to them from everywhere in my site, no matter which folder or file I am currently in. I can even inspect and change them in DevTools, which is not possible with SCSS or LESS.

## Grouping CSS properties

One more step to make your CSS more readable, especially if you have many rules in one selector, is to group your properties. There’s a [great article on MediaTemple](https://mediatemple.net/blog/tips/different-logical-ways-group-css-properties/) about grouping, showcasing different techniques one might like. Look at this selector:

{% highlight css %}
.button {
  display: flex;
  margin: 0;
  color: tomato;
  border: 2px solid tomato;
  background-color: white;
  font: inherit;
  transition: all .2s ease-out;
  padding: 1rem 2rem;
  border-radius: 3px;
}
{% endhighlight %}

The CSS properties in the above example are completely mixed up by their type, meaning that layout (padding, flexbox) is not separated by color (color, background) and so on.

I personally like to group my CSS properties by their type, so the CSS for the above example button would look like this:

{% highlight css %}
.button {
  display: flex;
  margin: 0;
  padding: 1rem 2rem;

  color: tomato;
  background-color: white;

  font: inherit;

  border: 2px solid tomato;
  border-radius: 3px;

  transition: all .2s ease-out;
}
{% endhighlight %}

You can define what kind of grouping you’d like, I usually go with these 6:

* Layout (flexbox, margin, padding, height, width)

* Position (position, top, right)

* Colors (color, background-color, blend-mode)

* Fonts (font-family, font-weight, text-transform)

* Borders (border-width, border)

* Others (transition, appearance, animation, opacity)

## Bringing it all together

Let’s have a look at a real-world example, using the above techniques. Say we have a page with a header, navigation, some content, and a footer:

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>My Awesome Site</title>
    
    <link rel="stylesheet" href="/css/base/global.css">
    <link rel="stylesheet" href="/css/base/typography.css">
    <link rel="stylesheet" href="/css/components/buttons.css">
  </head>
  
  <body>
    <link rel="stylesheet" href="/css/layout/main-header.css">
    <header class="main-header">
      <a class="logo -dark">My Awesome Site</a>
    </header>

    <link rel="stylesheet" href="/css/layout/main-navigation.css">
    <nav class="main-navigation">
      <a class="link -active" href="index.html">Home</a>
      <a class="link" href="about.html">About</a>
      <a class="link" href="contact.html">Contact</a>
    </nav>

    <link rel="stylesheet" href="/css/layout/main-content.css">
    <main class="main-content container">
      <h1 class="title">Welcome, enjoy this heading</h1>
      <p class="subtitle">What about this awesome subtitle? It seems to be a trend in recent web design, right?</p>

      <link rel="stylesheet" href="/css/components/gallery.css">
      <figure class="gallery-wrapper">
        <img class="image" src="/images/one.jpg" alt="One">
        <img class="image" src="/images/two.jpg" alt="Two">
        <img class="image" src="/images/three.jpg" alt="Three">
      </figure>

      <a class="button -small -primary" href="about.html">Learn more</a>
    </main>

    <link rel="stylesheet" href="/css/layout/main-footer.css">
    <footer class="main-footer">
      <p class="copyright">&copy; 2019 by Some Company Inc.</p>
    </footer>
  </body>
</html>
{% endhighlight %}

A rather simple example, of course, but you should get the idea. In global.css, I define my colors, spacing, fonts and so on:

{% highlight css %}
:root {
  --color-red: #f00;
  --color-blue: #00f;
  --spacing-large: 1rem;
  --font-family: 'Open Sans';
}

body {
  margin: 0;
}

...
{% endhighlight %}

My other CSS files are written using the earlier described *rscss* approach, which might look like this:

{% highlight css %}
.main-footer {
  background-color: gray;

  font-size: 90%;
}

.main-footer > .copyright {
  text-align: center;
}
{% endhighlight %}

If you definitely need some nesting or fancy mixins, feel free to use a CSS preprocessor. They can still be used with this approach and might provide even more goodies, such as the [awesome color functions](https://sass-lang.com/documentation/functions/color).

## Conclusion

I know that this might be a controversial article because, in the end, everybody is different and loves to use different tools, approaches, and philosophies. My goal is not to make you like my approach to scalable and beautiful CSS, but rather to give you inspiration.

Keep in mind that the bottom line is **not** to say that CSS-in-JS is bad, or that BEM was a stupid idea; they all exist for good reason. Very talented people have brought them to life, and a big community is using them to build amazing things each day. All I am saying is that I *personally* don’t enjoy them as much as I do enjoy my very own style, explained here.

My main reasons for using said approach is because it makes use of the latest web platform features, doesn’t require any additional libraries or tools, is scalable and maintainable and produces beautiful code.

However, what counts in the end is the final product we, the developers, ship to our users and that said product is accessible, performant, secure and in general, a joy to use.
