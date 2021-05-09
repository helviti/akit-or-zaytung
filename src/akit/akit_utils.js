import axios from 'axios';
import matchAll from 'match-all';

const newsUrl = 'https://www.yeniakit.com.tr/haber/';

async function getAkitNews() {
    let data = (await axios.get(newsUrl)).data;
    let matches = matchAll(data, /<div class="element"> <a href="([^"]*)" title="([^"]*)"/gi);
    let retVal = [];
    for (let match = matches.nextRaw(); match != null; match = matches.nextRaw()) {
        retVal.push({
            title: match[2],
            link: match[1]
        });
    }
    return retVal;
}

export default getAkitNews;