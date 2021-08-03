// rollup.config.js
import styles from "rollup-plugin-styles";
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'
import image from 'rollup-plugin-img';
import livereload from 'rollup-plugin-livereload'


export default {
    input: './src/index.js',
    watch: "",
    output: {
        file: './build/index.js',
        format: 'cjs'
    },
    plugins: [
        styles(),
        image({
            limit: 100000
        }),
        babel({ babelHelpers: 'bundled' }),
        serve({
            open: true,
            contentBase: './',
            port: 8000,
        }),
        livereload(),
    ],
};