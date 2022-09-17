import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import packageJson from './package.json';

const isProd = process.env.NODE_ENV === 'production';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: !isProd
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: !isProd
      }
    ],
    plugins: [
      filesize(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        sourceMap: !isProd,
        minimize: isProd,
        modules: {
          generateScopedName: 'GRF__[local]'
        },
        autoModules: false,
      }),
      generatePackageJson({
        outputFolder: 'dist',
        baseContents: {
          ...packageJson,
          scripts: undefined,
        },
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
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts(),
      del({ targets: ['dist/cjs/types', 'dist/esm/types'], hook: 'buildEnd' })
    ]
  },
];
