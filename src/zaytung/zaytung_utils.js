import axios from 'axios';
import matchAll from 'match-all';

const newsUrl = 'https://www.zaytung.com/digerleri.asp?pg=';
const baseUrl = 'https://www.zaytung.com/';

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
    let matches = matchAll(data, /href="([^"]*)" style="text-decoration:none;color:black;">([^<>]+)/gi);
    let retVal = [];
    for (let match = matches.nextRaw(); match != null; match = matches.nextRaw()) {
        let title = match[2];
        if (title.endsWith('...')) {
            title = title.substring(0, title.length - 3);
        }
        else if (title.endsWith("...''")) {
            title = title.substring(0, title.length - 5);
            title += "''";
        }
        retVal.push({
            title: title,
            link: baseUrl + match[1]
        });
    }
    return retVal;
}

async function getZaytungNews(pageAmount) {
    let retVal = [];
    let promises = [];
    for(let i = 1; i <= pageAmount; i++) {
        promises.push(getZaytungNewsFromPage(i).then(result => result.forEach(news => retVal.push(news))));
    }

    await Promise.all(promises);
    return retVal;
}

export default getZaytungNews;