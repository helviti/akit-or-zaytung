import getZaytungNews from './zaytung_utils.js'

let news = await getZaytungNews(10);
console.log(news);