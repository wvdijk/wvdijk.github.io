if (typeof jpg === 'undefined') {
    let img = document.querySelector('meta[property="og:image"]').content;
    var jpg = `https://${img.match(/(?<=s3\/)static\.nrc\.nl.*$/)}`;
    console.log(jpg);
}
window.open(jpg);
