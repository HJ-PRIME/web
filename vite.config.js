import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://HJ-PRIME.github.io/borrame", // <= agrega la llave base
});