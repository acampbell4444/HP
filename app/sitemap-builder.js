require('babel-register');
 
import { ROUTES } from './main'
import Sitemap from 'react-router-sitemap'
 
(
    new Sitemap(router)
        .build('http://www.havasuparasail.com')
        .save('./sitemap.xml')
);