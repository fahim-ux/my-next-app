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
    },
  },
  plugins: [],
};
export default config;
