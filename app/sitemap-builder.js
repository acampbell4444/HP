require('babel-register');
 
const router = require('./main').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('http://www.havasuparasail.com')
        .save('./sitemap.xml')
);