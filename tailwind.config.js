import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "pri": "rgba(77, 77, 77, 1)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".smooth-transition": {
          transition: "background-color 0.15s linear"
        }
      });
    }),
  ],
};
