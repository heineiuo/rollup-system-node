import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import alias from '@rollup/plugin-alias';

export default {
  input: ["src/main-a.js", ],
  external: ['react'],
  plugins: [
    alias({
      entries: [
        // {
        //   find: 'react',
        //   customResolver: () => {
        //     return {
        //       id: 'react',
        //       external: true
        //     }
        //   }
        //   // OR place `customResolver` here. See explanation below.
        // }
      ],
    }),

    nodeResolve(),
    commonjs({
      include: [/node_modules/],
      ignoreGlobal: false,
      sourceMap: false,
      requireReturnsDefault: "auto",
    }),
  ],
  output: [
    {
      inlineDynamicImports: true,
      dir: "dist/system",
      format: "system",
      sourcemap: true,
    },
  ],
};
