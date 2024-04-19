import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: [
      {find: "@compoents", replacement: "/src/components"},
      {find: "@", replacement: "/src"},
    ],
  },
  plugins: [react()],
});
