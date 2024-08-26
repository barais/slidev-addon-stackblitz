import { defineConfig } from "vite";

export default defineConfig({
	optimizeDeps: {
		include: ["slidev-addon-stackblitz > qr-code-styling"],
	},
});
