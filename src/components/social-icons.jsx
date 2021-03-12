import React from "react";
import { list, item, anchor } from "./social-icons.module.css";

const links = [
  {
    url: "https://github.com/andreasremdt",
    icon: "github",
    ariaLabel: "View my repositories on GitHub"
  },
  {
    url: "https://linkedin.com/in/andreasremdt",
    icon: "linkedin",
    ariaLabel: "View my resúmé on LinkedIn"
  },
  {
    url: "https://medium.com/@andreas.remdt",
    icon: "medium",
    ariaLabel: "Read my publications on Medium"
  },
  {
    url: "https://codepen.io/andreasremdt",
    icon: "codepen",
    ariaLabel: "View my experiments on Codepen"
  },
  {
    url: "https://500px.com/andreasremdt",
    icon: "500px",
    ariaLabel: "View my photos on 500px"
  }
];

const SocialIcons = () => (
  <ul className={list}>
    {links.map((link) => (
      <li key={link.url} className={item}>
        <a
          href={link.url}
          aria-label={link.ariaLabel}
          target="_blank"
          rel="noopener nofollow noreferrer"
          className={anchor}
        >
          <svg width="28" height="28">
            <use xlinkHref={`/symbol-defs.svg#${link.icon}`}></use>
          </svg>
        </a>
      </li>
    ))}
  </ul>
);

export default SocialIcons;
