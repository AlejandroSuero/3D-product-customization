/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.hmtl",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        aoi: {
          "50": "#eff9ff",
          "100": "#daf1ff",
          "200": "#bde7ff",
          "300": "#90daff",
          "400": "#5cc3fe",
          "500": "#36a6fb",
          "600": "#1f88f1",
          "700": "#1870dd",
          "800": "#1c62c2",
          "900": "#1b4e8d",
          "950": "#153056",
        }
      }
    },
  },
  plugins: [],
};
