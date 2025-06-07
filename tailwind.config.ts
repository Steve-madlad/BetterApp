import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "hsla(var(--border))",
				card: "hsla(var(--card))",
				input: "hsla(var(--input))",
				destructive: "hsla(var(--destructive))",
        darkblue: "#1e293b",
        accent: {
          DEFAULT: "hsla(var(--accent))",
          foreground: "hsla(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsla(var(--muted))",
          foreground: "hsla(var(--muted-foreground))",
        },
        "light-dark": "hsla(var(--light-dark))",
        "ocean-blue": "hsla(var(--brand-blue))",
        sidebar: {
          DEFAULT: "hsla(var(--sidebar-background))",
          foreground: "hsla(var(--sidebar-foreground))",
          primary: "hsla(var(--sidebar-primary))",
          "primary-foreground": "hsla(var(--sidebar-primary-foreground))",
          accent: "hsla(var(--sidebar-accent))",
          "accent-foreground": "hsla(var(--sidebar-accent-foreground))",
          border: "hsla(var(--sidebar-border))",
          ring: "hsla(var(--sidebar-ring))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
