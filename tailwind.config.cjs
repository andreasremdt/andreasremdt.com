/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,ts}"],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        'Merriweather, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: "JetBrains Mono, monospace",
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: theme("colors.slate.50"),
              fontFamily: theme("fontFamily.mono"),
              color: theme("colors.slate.800"),
            },
            code: {
              backgroundColor: theme("colors.slate.50"),
              padding: "0 .5rem",
              borderRadius: 4,
            },
            "code::before": {
              content: "",
            },
            "code::after": {
              content: "",
            },
            iframe: {
              borderRadius: "0.375rem",
              boxShadow:
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              width: "100%",
              height: "auto",
              aspectRatio: "16/9",
              outline: "none",
            },
            h2: {
              fontFamily: theme("fontFamily.serif"),
              fontWeight: "bold",
            },
            h3: {
              fontFamily: theme("fontFamily.serif"),
              fontWeight: "bold",
            },
            h4: {
              fontFamily: theme("fontFamily.serif"),
              fontWeight: "bold",
            },
            a: {
              color: theme("colors.slate.900"),
              fontWeight: "bold",
              textDecoration: "underline",
              transition: "color .075s linear",
            },
            "a:hover": {
              color: theme("colors.emerald.500"),
            },
            "a:focus": {
              color: theme("colors.emerald.500"),
              outline: "none",
            },
            img: {
              borderRadius: "0.375rem",
              boxShadow:
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
