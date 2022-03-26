import packageJson from "./package.json";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

// postcss plugins
import simplevars from "postcss-simple-vars";
import nested from "postcss-nested";
import cssnext from "postcss-cssnext";
import cssnano from "cssnano";

const globals = {
	...packageJson.devDependencies,
};
const extensions = [".js", ".ts", ".tsx", ".jsx"];

const config = [
	{
		input: "src/index.ts",
		output: [
			{
				file: packageJson.main,
				format: "cjs", // commonJS
				// sourcemap: true,
			},
			{
				file: packageJson.module,
				format: "esm", // ES Modules
				// sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			postcss({
				plugins: [
					simplevars(),
					nested(),
					cssnext({ warnForDuplicates: false }),
					cssnano(),
				],
				extensions: [".css"],
			}),
			json(),
			resolve({ extensions }),
			commonjs(),
			typescript({
				useTsconfigDeclarationDir: true,
			}),
			commonjs({
				exclude: "node_modules",
				ignoreGlobal: true,
			}),
			babel({
				exclude: "node_modules/**",
				extensions,
				babelHelpers: "bundled",
			}),
		],
		external: Object.keys(globals),
	},
	{
		input: "./@types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "es" }],
		plugins: [dts({ respectExternal: true })],
	},
];
export default config;
