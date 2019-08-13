/*create code*/
let podcast, podcasturl, itunes, stitcher, spotify, castbox, rss;
const URL = window.location.toString().split('#')[0];
const HEADLINE = document.getElementsByTagName('h1')[1].textContent;
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
const EPISODE = document.querySelector('.art19-web-player').getAttribute('data-episode-id');
const EMBEDCODE = `<div style="font-family: LFT Etica, Lucida Sans, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif; font-style: italic;"><p style="margin-bottom: 1.1em;">Luister ook naar <a href="${URL}">deze aflevering</a> van onze podcastserie <a href="${podcasturl}">${podcast}</a>: ${HEADLINE}</p>
<link href="https://web-player.art19.com/assets/current.css" media="screen" rel="stylesheet" type="text/css">
<script src="https://web-player.art19.com/assets/current.js" type="text/javascript"></script>
<div class="art19-web-player awp-medium awp-theme-light-custom" data-episode-id="${EPISODE}" data-primary-color="#333333"></div>
<span style="font-size: smaller;">U kunt zich ook <a href="${itunes}" rel="noopener" target="_blank">abonneren via Apple Podcasts</a>, <a href="${stitcher}" rel="noopener" target="_blank">Stitcher</a>, <a href="${spotify}" rel="noopener" target="_blank">Spotify</a>, <a href="${castbox}">Castbox</a> of <a href="${rss}" rel="noopener" target="_blank">RSS</a>.</div>`;

/*create layer*/
let copyFrom = document.createElement('div');
copyFrom.setAttribute('style', 'color: #000; background: #fff; border-style: solid; border-width: 2px; border-color: #000; position: fixed; width: 850px; top: 100px; left: 100px; z-index: 999 !important;');
copyFrom.setAttribute('id', 'copyfrom');
let explain = document.createElement('p');
explain.setAttribute('style', 'width: 800px; margin: 25px auto 10px auto;');
explain.innerText = 'Druk op de knop om de code te kopiëren en plak die vervolgens in WordPress/Honk op de gewenste plek in het artikel:';
copyFrom.appendChild(explain);
/*buttons*/
let cp = document.createElement('button');
cp.setAttribute('type', 'button');
cp.setAttribute('style', 'margin-left: 25px; margin-bottom: 25px;');
cp.innerText = 'Kopiëren en sluiten';
cp.addEventListener('click', copyCode);
copyFrom.appendChild(cp);
let cancel = document.createElement('button');
cancel.setAttribute('type', 'button');
cancel.setAttribute('style', 'margin-left: 25px; margin-bottom: 25px;');
cancel.innerText = 'Annuleren';
cancel.addEventListener('click', function() {
	document.body.removeChild(copyFrom);
});
copyFrom.appendChild(cancel);
/*actual code*/
let code = document.createElement('p');
code.setAttribute('style', 'font-family: monospace; width: 800px; margin: 5px auto 10px auto; border-style: dotted; border-width: 1px; border-color: #ccc;');
code.setAttribute('id', 'embedcode');
code.innerText = EMBEDCODE;
copyFrom.appendChild(code);
document.body.appendChild(copyFrom);

/*copy to clipboard and kill layer*/
function copyCode(elem) {
    let text = document.getElementById('embedcode');
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    document.body.removeChild(copyFrom)
}