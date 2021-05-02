import getZaytungNews from './zaytung_utils.js'

let news = await getZaytungNews();
console.log(news);