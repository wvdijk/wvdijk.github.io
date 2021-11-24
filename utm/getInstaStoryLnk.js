if (!getInstaStoryLnk) {
	var getInstaStoryLnk = function() {
		let url = window.location.toString().split(/[#\?]+/)[0];
		let utm = `${url}/utm/igstory`;
		prompt('Gebruik deze link in je story op Instagram:', utm);
	}
};
getInstaStoryLnk();
