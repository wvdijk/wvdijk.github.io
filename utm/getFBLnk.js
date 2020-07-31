if (!getFBLnk) {
	var getFBLnk = function() {
		let url = window.location.toString().split('?')[0].split('#')[0];
		let date = new Date;
		let y = date.getFullYear();
		let m = date.getMonth() + 1;
		m < 10 ? m = `0${m}` : m = m;
		let d = date.getDate();
		d < 10 ? d = `0${d}` : d = d;
		let utm = `${url}?utm_source=facebook&utm_medium=social&utm_campaign=facebook&utm_term=${y}${m}${d}`;
		prompt('Gebruik deze link in je post op Facebook:', utm);
	}
};
getFBLnk();
