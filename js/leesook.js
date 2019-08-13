/*create code*/
const URL = window.location.toString();
const HEADLINE = document.title.slice(0,-6);
const LEESOOK = decodeURIComponent(`<div class="lees-ook">Lees ook <a href="${URL}">${HEADLINE}</a></div>`);

/*create layer*/
let copyFrom = document.createElement('div');
copyFrom.setAttribute('style', 'color: #000; background: #fff; border-style: solid; border-width: 2px; border-color: #000; position: fixed; width: 650px; top: 100px; left: 100px; z-index: 999 !important;');
copyFrom.setAttribute('id', 'copyfrom');
let explain = document.createElement('p');
explain.setAttribute('style', 'width: 600px; margin: 25px auto 10px auto;');
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
code.setAttribute('style', 'font-family: monospace; width: 600px; margin: 5px auto 10px auto; border-style: dotted; border-width: 1px; border-color: #ccc;');
code.setAttribute('id', 'embedcode');
code.innerText = LEESOOK;
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