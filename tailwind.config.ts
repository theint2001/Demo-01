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
        limestone: "#F4F0E8", // Soft warm oat / silk
        surface: "#FDFCF7",   // Warm creamy linen surface
        charcoal: "#2A2723",  // Soft warm espresso (not stark black!)
        stone: "#6F746D",     // Soft sage greige
        graphite: "#232825",  // Deep olive slate
        clay: "#D99B82",      // Soft powder clay / muted terracotta
        olive: "#6B7F6D",     // Soft fresh mint sage
        sage: "#E2E9E2",      // Soft pastel mint tint
        sand: "#EAE3D5",      // Soft warm sand
        mist: "#E8EDEA",      // Soft mist green
        "border-stone": "#E2DDD3",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
};
export default config;
