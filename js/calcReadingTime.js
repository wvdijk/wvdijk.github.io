// bookmarklet based on https://www.nrc.nl/static/front/js/src/utils/calcReadingTime.js
let calcReadingTime = function(elem) {
	let words = elem.textContent.split(' ');
	let seconds = (words.length / 300) * 60;
	let numImages = elem.querySelector('img').length;
	for (let i = 0; i < numImages; i++) {
		if (i > 9) {
			seconds += 3;
		} else {
			seconds += 12 - i;
		}
	}
	return Math.round(seconds);
};

let articleBody = document.getElementsByClassName('article__content')[0];
alert(`De berekende leestijd voor dit artikel is ${calcReadingTime(articleBody)} seconden`);
