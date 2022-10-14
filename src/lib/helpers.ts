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
