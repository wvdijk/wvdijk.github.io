// adapted from https://stackoverflow.com/a/18455088, credit where it's due
export default clippy = function (text) {
		const copyFrom = document.createElement('textarea');
		copyFrom.textContent = text;
		const body = document.getElementsByTagName('body')[0];
		body.appendChild(copyFrom);
		copyFrom.select();
		document.execCommand('copy');
		body.removeChild(copyFrom);
};