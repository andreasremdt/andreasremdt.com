module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'Merriweather, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: "JetBrains Mono, monospace",
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: theme("colors.gray.50"),
              fontFamily: theme("fontFamily.mono"),
            },
            code: {
              backgroundColor: theme("colors.gray.100"),
              paddingInline: 7,
              fontWeight: 600,
              color: theme("colors.gray.800"),
              fontFamily: theme("fontFamily.mono"),
            },
            "code::before": {
              content: "",
            },
            "code::after": {
              content: "",
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
              color: theme("colors.gray.900"),
              borderBottom: `2px solid ${theme("colors.emerald.400")}`,
              textDecoration: "none",
              transition: "color .075s linear",
            },
            "a:hover": {
              color: theme("colors.emerald.500"),
            },
            "a:focus": {
              color: theme("colors.emerald.500"),
              outline: "none",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
