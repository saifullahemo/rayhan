// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",  // Next.js pages directory
    "./components/**/*.{js,ts,jsx,tsx}",  // components directory
    "./app/**/*.{js,ts,jsx,tsx}",  // if you use a custom app directory
    "./src/**/*.{js,ts,jsx,tsx}",  // if you have src folder
  ],
  theme: {
    extend: {
        boxShadow: {
          glow: '0 4px 15px rgba(0, 255, 255, 0.6)', // Customize the color and intensity
        },
    },
  },
  plugins: [],
};
