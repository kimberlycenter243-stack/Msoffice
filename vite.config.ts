import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",                  // site servi à la racine du domaine Netlify
  build: {
    outDir: "dist",           // (par défaut) mais on le fixe explicitement
    sourcemap: true           // utile pour voir l’erreur exacte si ça plante en prod
  },
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  // (optionnel mais pratique si une lib lit process.env côté client)
  define: {
    "process.env": {}
  }
});
