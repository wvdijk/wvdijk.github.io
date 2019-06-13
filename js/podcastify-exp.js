javascript:(function(){
	import {clippy} from './common/clippy';
	let podcast, podcasturl, itunes, stitcher, spotify, castbox, rss;
	const url = window.location.toString();
	const headline = document.getElementsByTagName('h1')[1].textContent;
	if (document.querySelector('.in-rubric-haagse-zaken')) {
		podcast = 'NRC Haagse Zaken';
		podcasturl = 'https://www.nrc.nl/rubriek/haagse-zaken/';
		itunes = 'https://itunes.apple.com/nl/podcast/haagse-zaken/id1205520865?l=en&mt=2';
		stitcher = 'https://www.stitcher.com/podcast/nrc/haagse-zaken';
		spotify = 'https://open.spotify.com/show/5UDty8uMg4IDiESuFNhC3k?si=jVrUjrucTHCaStTRpK3lZw';
		castbox = 'https://castbox.fm/channel/NRC-Haagse-Zaken-id1054441';
		rss = 'https://rss.art19.com/haagse-zaken';
		console.log(podcast, podcasturl, itunes, stitcher, spotify, rss);
	} else if (document.querySelector('.in-rubric-onbehaarde-apen'))  {
		podcast = 'NRC Onbehaarde Apen';
		podcasturl = 'https://www.nrc.nl/rubriek/onbehaarde-apen/';
		itunes = 'https://itunes.apple.com/nl/podcast/onbehaarde-apen/id1361734727?mt=2';
		stitcher = 'https://www.stitcher.com/podcast/nrc/onbehaarde-apen';
		spotify = 'https://open.spotify.com/show/5EeJe2VXLddbALBcvmhOFv?si=X-Bx7neMR8aDZHXi9rDCQw';
		castbox = 'https://castbox.fm/channel/NRC-Onbehaarde-Apen-id1208942';
		rss = 'https://rss.art19.com/onbehaarde-apen';
		console.log(podcast, podcasturl, itunes, stitcher, spotify, rss);
	} else if (document.querySelector('.in-rubric-podcast-vandaag'))  {
		podcast = 'NRC Vandaag';
		podcasturl = 'https://www.nrc.nl/rubriek/podcast-vandaag/';
		itunes = 'https://podcasts.apple.com/nl/podcast/vandaag/id1460234936';
		stitcher = 'https://www.stitcher.com/podcast/nrc/vandaag';
		spotify = 'https://open.spotify.com/show/73vZPMVjxTqC02OYZdcCr7';
		castbox = 'https://castbox.fm/channel/Vandaag-id2094393';
		rss = 'https://rss.art19.com/vandaag';
		console.log(podcast, podcasturl, itunes, stitcher, spotify, rss);
	} else {
		alert('Deze podcast (her)ken ik niet...');
	}
	const episode = document.querySelector('.art19-web-player').getAttribute('data-episode-id');
	const embedcode = `<div><em>Luister ook naar <a href="${url}">deze aflevering</a> van onze podcastserie <a href="${podcasturl}">${podcast}</a>: ${headline}<br /><span style="font-size: smaller;">U kunt zich ook <a href="${itunes}" rel="noopener" target="_blank">abonneren via Apple Podcasts</a>, <a href="${stitcher}" rel="noopener" target="_blank">Stitcher</a>, <a href="${spotify}" rel="noopener" target="_blank">Spotify</a>, <a href="${castbox}">Castbox</a> of <a href="${rss}" rel="noopener" target="_blank">RSS</a>.</em><link href="https://web-player.art19.com/assets/current.css" media="screen" rel="stylesheet" type="text/css"><script src="https://web-player.art19.com/assets/current.js" type="text/javascript"></script><div class="art19-web-player awp-medium awp-theme-light-custom" data-episode-id="${episode}" data-primary-color="#333333"></div></div>`;
	clippy(embedcode);
})();