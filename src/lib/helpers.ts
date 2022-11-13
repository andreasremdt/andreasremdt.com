export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function isLinkActive(href: string, astroUrl: URL) {
  return (
    (href === "/" && astroUrl.pathname === "/") ||
    (href !== "/" && astroUrl.pathname.includes(href as string))
  );
}

export function getButtonText(url: string) {
  if (url.includes("css-tricks")) {
    return "Read the complete article on CSS-Tricks";
  } else if (url.includes("youtube")) {
    return "Watch on YouTube";
  } else {
    return "";
  }
}
