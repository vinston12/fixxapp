/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0052FF', // Oryginalny Coinbase Blue
          dark: '#0042CC',    // Ciemniejszy niebieski po najechaniu (hover)
        },
        accent: {
          DEFAULT: '#FFC800', // Słoneczny żółty
          hover: '#E5B400',   // Ciemniejszy żółty po najechaniu
        },
        surface: '#FFFFFF',   // Czysta biel na karty i nagłówek
        bg: '#F8FAFC',        // Bardzo delikatny szaro-niebieski na tło aplikacji
        border: '#E2E8F0',    // Kolor subtelnych linii oddzielających
        text: '#1E293B',      // Główny tekst (bardzo ciemny granat/szary)
        muted: '#64748B',     // Tekst poboczny (np. "Średnia ocena")
      }
    },
  },
  plugins: [],
}