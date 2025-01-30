import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        robotoMono:['var(--font-roboto-mono)', 'monospace'],
        consolas:['var(--font-consolas,)', 'monospace'],
        iceland:['var(--font-iceland,)', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle, rgba(23,21,59,1) 12%, rgba(3,52,110,1) 44%, rgba(29,38,125,1) 78%, rgba(23,21,59,1) 99%)',
        'custom-linear-gradient': 'linear-gradient(0deg, rgba(7,65,115,1) 15%, rgba(16,55,92,1) 48%, rgba(0,11,88,1) 95%)',
        'navbar-gradient': 'linear-gradient(90deg, rgba(2,21,38,1) 35%, rgba(3,52,110,1) 84%)',
        'new-back':'linear-gradient(90deg, rgba(48,71,94,1) 35%, rgba(240,84,84,1) 75%)'
      },
    },
  },
  plugins: [],
};
export default config;
