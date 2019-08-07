let getWALnk = function() {
	let url = window.location.toString().split('?')[0].split('#')[0];
	let date = new Date;
	let y = date.getFullYear();
	let m = date.getMonth() + 1;
	m < 10 ? m = `0${m}` : m = m;
	let d = date.getDate();
	d < 10 ? d = `0${d}` : d = d;
	let utm = `${url}?utm_source=social&utm_medium=whatsapp&utm_campaign=whatsapp&utm_term=${y}${m}${d}`;
	prompt('Maak hier op https://nrch.nl/nieuwe een short-url van met utm codes voor WhatsApp', utm);
	};
getWALnk();