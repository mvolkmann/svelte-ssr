import svelte from 'rollup-plugin-svelte';

export default {
  //entry: 'src/entry.js',
  //input: 'src/entry.js',
  input: 'src/App.svelte',
  output: {
    sourcemap: true,
    format: 'cjs',
    //format: 'esm',
    //format: 'iife',
    //name: 'ssr',
    file: 'build/ssr.js'
  },
  plugins: [
    svelte({
      generate: 'ssr',
      hydratable: true
    })
  ]
};
