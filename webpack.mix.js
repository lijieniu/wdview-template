const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
	.js('resources/js/app.js', 'public/js')
	.vue()
	.postCss('resources/css/app.css', 'public/css', [
		//
	])
	// 小程序帮助文档
	.ts('resources/js/index.js', 'public/js/index.js');
mix.sass('resources/sass/index.scss', 'public/css');
mix.version();
// 热加载
// mix.browserSync({
// 	proxy: '',
// });
