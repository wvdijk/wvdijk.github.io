const clippy = function (text) {
		const copyFrom = document.createElement('textarea');
		copyFrom.textContent = text;
		const body = document.getElementsByTagName('body')[0];
		body.appendChild(copyFrom);
		copyFrom.select();document.execCommand('copy');
		body.removeChild(copyFrom);
	};
const url = window.location.toString();
const title = document.title;
const headline = title.slice(0,-6);
const leesook = decodeURIComponent('<div class%3D"lees-ook">Lees ook <a href%3D"' + url +'">' + headline + '<%2Fa><%2Fdiv>');
clippy(leesook);
