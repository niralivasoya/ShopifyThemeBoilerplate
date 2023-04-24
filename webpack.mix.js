let mix = require('laravel-mix');

// JavaScript
mix.js(['src/js/app.js'], 'app.js');

// SASS
mix.sass('src/scss/app.scss', 'app.css');

// Setup
mix.extract();
mix.setPublicPath('assets/');
