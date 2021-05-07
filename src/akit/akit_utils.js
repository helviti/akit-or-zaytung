import axios from 'axios';
import matchAll from 'match-all';

const newsUrl = 'https://www.yeniakit.com.tr/haber/';

async function getAkitNews() {
    let data = (await axios.get(newsUrl)).data;
    let matches = matchAll(data, /<div class="element"> <a href="([^"]*)|class="spot">([^<]*)/gi).toArray();
    let retVal = [];
    for (let i = 1; i < matches.length; i++) {
        retVal.push({
            title: matches[i + 1],
            link: matches[i]
        });
    }
    return retVal;
}

export default getAkitNews;