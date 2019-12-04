document.getElementById('submit').onclick = function () {
	let artURL = document.getElementById('artURL').value;
	let artID = artURL.match(/\-a(\d+)/)[1];
	let editlink = document.createElement('a');
	editlink.href = `https://honk.nrc.nl/bvhw/?nrc_action=hub2import&article_id=${artID}`;
	let linktxt = document.createTextNode(`Edit in Honk, at your own risk: ${artID}\n`);
	editlink.appendChild(linktxt);
	document.body.appendChild(editlink);
	return false;
}
