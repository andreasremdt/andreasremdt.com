const getLabelFromUrl = (url) => {
  if (!url) {
    return "Read article";
  } else if (url.includes("css-tricks.com")) {
    return "Read on CSS-Tricks";
  }
};

export default getLabelFromUrl;
