import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import vercel from "@astrojs/vercel"; // ✅ Import correcto

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
  output: "server", // o "static" si no usas SSR
  adapter: vercel({ mode: "server" }), // ✅ Modo explícito
});

