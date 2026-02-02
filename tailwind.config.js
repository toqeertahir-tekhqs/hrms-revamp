/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Add custom theme extensions here
    },
  },
  plugins: [],
  // Important: Tailwind utilities can override Ant Design via CSS specificity
  // No prefix needed - use utility classes directly
}
