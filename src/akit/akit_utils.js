import axios from 'axios';
import matchAll from 'match-all';

const newsUrl = 'https://www.yeniakit.com.tr/haber/';

async function getAkitNews() {
    let data = (await axios.get(newsUrl)).data;
    let matches = matchAll(data, /class="spot">([^<]*)</gi).toArray();
    return matches.slice(1, matches.length);
}

export default getAkitNews;