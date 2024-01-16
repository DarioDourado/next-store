import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-intern)' // Podemos ter variáveis
      },
      gridTemplateRows: {
        app: 'nim-content max-content' // Criamos um template de rows que agora nos aparece como grid-rows-app
      }
    },
  },
  plugins: [],
}
export default config

// 