const clippy = function (text) {
		const copyFrom = document.createElement('textarea');
		copyFrom.textContent = text;
		const body = document.getElementsByTagName('body')[0];
		body.appendChild(copyFrom);
		copyFrom.select();document.execCommand('copy');
		body.removeChild(copyFrom);
	};
const explain = function() {
	if (localStorage.getItem('seen_intro_leesook',true)) {
			console.log('has seen intro')
	} else {
			alert('De code is gekopieerd. Plak die nu met Ctrl-V (Windows, Linux) of Command-V (Mac) in het postje.\n\nDEZE MELDING VERSCHIJNT EENMALIG.\nDe volgende keer dat je deze knop gebruikt, kun je dus gewoon de code plakken zonder eerst deze popup te moeten wegklikken.');
				localStorage.setItem('seen_intro_leesook', 'true');
			}
	};	
const url = window.location.toString();
const title = document.title;
const headline = title.slice(0,-6);
const leesook = decodeURIComponent('<div class%3D"lees-ook">Lees ook <a href%3D"' + url +'">' + headline + '<%2Fa><%2Fdiv>');
clippy(leesook);
