/*create code*/
VIDEOID = window.location.toString().split(/\=+/).pop();
YTEMBED = decodeURIComponent(`<div class="videowrapper"><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="nmt-lazy-if-cookies-allowed" data-src="https://www.youtube-nocookie.com/embed/${VIDEOID}?rel=0&feature=oembed" frameborder="0" wmode="transparent"></iframe></div>`);

/*create layer*/
copyFrom = document.createElement('div');
copyFrom.setAttribute('style', 'color: #000; background: #fff; border-style: solid; border-width: 2px; border-color: #000; position: fixed; width: 650px; top: 100px; left: 100px; z-index: 999 !important;');
copyFrom.setAttribute('id', 'copyfrom');
explain = document.createElement('p');
explain.setAttribute('style', 'width: 600px; margin: 25px auto 10px auto;');
explain.innerText = 'Druk op de knop om de code te kopiëren en plak die vervolgens in GN4 als HTML Embed Code op de gewenste plek in het artikel:';
copyFrom.appendChild(explain);
/*buttons*/
cp = document.createElement('button');
cp.setAttribute('type', 'button');
cp.setAttribute('style', 'margin-left: 25px; margin-bottom: 25px;');
cp.innerText = 'Kopiëren en sluiten';
cp.addEventListener('click', copyCode);
copyFrom.appendChild(cp);
cancel = document.createElement('button');
cancel.setAttribute('type', 'button');
cancel.setAttribute('style', 'margin-left: 25px; margin-bottom: 25px;');
cancel.innerText = 'Annuleren';
cancel.addEventListener('click', function() {
	document.body.removeChild(copyFrom);
});
copyFrom.appendChild(cancel);
/*actual code*/
code = document.createElement('p');
code.setAttribute('style', 'font-family: monospace; width: 600px; margin: 5px auto 10px auto; border-style: dotted; border-width: 1px; border-color: #ccc;');
code.setAttribute('id', 'embedcode');
code.innerText = YTEMBED;
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