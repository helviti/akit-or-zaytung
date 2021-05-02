import axios from 'axios';
import matchAll from 'match-all';

const newsUrl = 'https://www.zaytung.com/digerleri.asp?pg=';

function decodeEntities(encodedString) {
    var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
    var translate = {
        "nbsp":" ",
        "amp" : "&",
        "quot": "\"",
        "lt"  : "<",
        "gt"  : ">"
    };
    return encodedString.replace(translate_re, function(match, entity) {
        return translate[entity];
    }).replace(/&#(\d+);/gi, function(match, numStr) {
        var num = parseInt(numStr, 10);
        return String.fromCharCode(num);
    });
}

async function getZaytungNewsFromPage(page) {
    let data = decodeEntities((await axios.get(newsUrl + page)).data);
    let matches = matchAll(data, /style="text-decoration:none;color:black;">([^<>]+)</gi).toArray();
    return matches.slice(1, matches.length);
}

async function getZaytungNews(pageAmount) {
    let retVal = [];
    for(let i = 1; i <= pageAmount; i++) {
        (await getZaytungNewsFromPage(i)).forEach(element => retVal.push(element));
    }

    return retVal;
}

export default getZaytungNews;