import * as cheerio from 'cheerio';

let res = await fetch('https://xkcd.com/');
let body = await res.text();
const $ = cheerio.load(body);
let img = $('#comic>img');
console.log(img.attr('src'));
console.log(img.attr('alt'));
console.log(img.attr('tittle'));
