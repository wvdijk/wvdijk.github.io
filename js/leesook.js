const URL = window.location.toString();
const TITLE = document.title;
const HEADLINE = TITLE.slice(0,-6);
const LEESOOK = decodeURIComponent(`<div class="lees-ook">Lees ook <a href="${URL}">${HEADLINE}</a></div>`);

let copyFrom = document.createElement('div');
copyFrom.setAttribute('style', 'color: #000; background: #fff; position: absolute; width: 500px; top: 100px; left: 100px; z-index: 99 !important;');
copyFrom.setAttribute('id', 'copyfrom');
let code = document.createElement('p');
code.setAttribute('style', 'font-family: monospace;');
code.innerText = LEESOOK;
copyFrom.appendChild(code);
let cp = document.createElement('button');
cp.setAttribute('type', 'button');
cp.setAttribute('value', 'Kopieer');
copyFrom.appendChild(cp);
document.body.appendChild(copyFrom);


/*
const clippy = function (text) {
		const copyFrom = document.createElement('textarea');
		copyFrom.textContent = text;
		const body = document.getElementsByTagName('body')[0];
		body.appendChild(copyFrom);
		copyFrom.select();document.execCommand('copy');
		body.removeChild(copyFrom);
	};

clippy(LEESOOK); */