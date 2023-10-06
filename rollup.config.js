import ts from "@rollup/plugin-typescript";
import externals from "rollup-plugin-node-externals";

export const config = [
  {
    input: "./src/node/index.ts",
    output: [{
      dir: "./dist/esm",
      format: "esm",
      exports: "named",
      preserveModules: true,
      sourcemap: true,
      entryFileNames: "[name].mjs",
    }],
    plugins: [externals(), ts({ declaration: true, declarationDir: "./dist/esm/src/node" })]
  },
  {
    input: "./src/node/index.ts",
    output: [{
      dir: "./dist/cjs",
      format: "cjs",
      exports: "named",
      preserveModules: true,
      sourcemap: true,
      entryFileNames: "[name].cjs",
    }],
    plugins: [externals(), ts()]
  },
  {
    input: "./src/node/index.test.ts",
    output: [{
      dir: "./dist/test",
      format: "esm",
      exports: "named",
      preserveModules: true,
      sourcemap: true,
      entryFileNames: "[name].mjs"
    }],
    plugins: [externals({ devDeps: true }), ts()],
  },
  {
    input: "./src/node/index.bench.ts",
    output: [{
      dir: "./dist/bench",
      format: "esm",
      exports: "named",
      preserveModules: true,
      sourcemap: true,
      entryFileNames: "[name].mjs"
    }],
    plugins: [externals({ devDeps: true }), ts()],
  },
]

export default config