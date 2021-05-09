import getZaytungNews from '../zaytung/zaytung_utils.js';
import getAkitNews from '../akit/akit_utils.js';
import fs from 'fs';

async function writeNewsFile() {
	var news = {};
	var akitPromise = getAkitNews().then((result) => (news.akit = result));
	var zaytungPromise = getZaytungNews(10).then(
		(result) => (news.zaytung = result)
	);

	await Promise.all([akitPromise, zaytungPromise]);

	fs.writeFile('./src/news.json', JSON.stringify(news), (err) => {
		if (err) console.log(err);
	});
}

export default writeNewsFile;
