if (!JPG) {
    let img = document.querySelector('meta[property="og:image"]').content;
    const REGEX = /(?<=s3\/)static\.nrc\.nl.*$/
    const JPG = `https://${img.match(REGEX)}`;
}
window.open(JPG);
