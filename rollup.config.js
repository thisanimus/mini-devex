import { nodeResolve } from "@rollup/plugin-node-resolve";
export default {
	input: "./src/js/script.js",
	output: {
		file: "./assets/js/script.min.js",
		format: "es",
		name: "bundle",
	},
	watch: {
		include: ["src/**/*"],
		exclude: "./assets/js/script.min.js",
	},
	plugins: [nodeResolve({ jsnext: true })],
};
