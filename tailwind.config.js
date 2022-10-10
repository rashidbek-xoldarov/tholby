/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "nav-color": "#1C1B1B",
        "hero-color": "#f0efeb",
        e5: "#e5e5e5",
        d4: "#d4d4d4",
        f0: "#f0f0f0",
      },
      maxWidth: {
        heroInfo: "534px",
        bestSeller: "650px",
        cardTitle: "156px",
        colorLi: "210px",
        fascinatingTitle: "705px",
        contactInfo: "496px",
      },
      backgroundImage: {
        heroBg: "url('../images/hero-bg.png')",
      },
      backgroundPosition: {
        heroBgPos: "top left calc(50% + 320px)",
      },
      gridTemplateColumns: {
        col1: "repeat(1, 210px)",
        col2: "repeat(2, 210px)",
        col3: "repeat(3, 210px)",
      },
      borderRadius: {
        btnRadius: "100px",
      },
    },
  },
  plugins: [],
};
