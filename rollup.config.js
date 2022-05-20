import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete'
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy'

const packageJson = require("./package.json");

const isProd = process.env.NODE_ENV === 'production';

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: !isProd
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: !isProd
      }
    ],
    plugins: [
      filesize(),
      del({ targets: 'dist/*' }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        sourceMap: !isProd,
        minimize: isProd,
        modules: {
          generateScopedName: "Grapefruit-UI__[local]",
        },
        autoModules: false
      }),
      isProd ? terser({
        compress: {
          drop_console: true,
          passes: 2,
          properties: false,
        }
      }) : undefined,
      copy({
        targets: [
          {
            src: 'src/styles/index.css',
            dest: 'dist',
            rename: 'styles.css'
          }
        ]
      })
    ]
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()]
  },
];
