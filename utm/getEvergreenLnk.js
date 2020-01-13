if (!getEvergreenLnk) {
	var getEvergreenLnk = function() {
		let url = window.location.toString().split('?')[0].split('#')[0];
		prompt(`Gebruik deze link in je Evergreen-post: ${url}?utm_source=social&utm_campaign=evergreen`);
	}
};
getEvergeenLnk();
