if (!getTwitLnk) {
	var getTwitLnk = function() {
		let url = window.location.toString().split(/[#\?]+/)[0];
		let date = new Date;
		let y = date.getFullYear();
		let m = date.getMonth() + 1;
		m < 10 ? m = `0${m}` : m = m;
		let d = date.getDate();
		d < 10 ? d = `0${d}` : d = d;
		let utm = `${url}?utm_source=twitter&utm_medium=social&utm_campaign=twitter&utm_term=${y}${m}${d}`;
		prompt('Gebruik deze link in je post op Twitter:', utm);
	}
};
getTwitLnk();
