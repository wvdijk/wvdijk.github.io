let img = document.querySelector('figure.article__featured-image div.responsive-img-div img').src;
const REGEX = /(?<=s3\/)static\.nrc\.nl.*$/
const JPG = `https://${img.match(REGEX)}`;
window.open(JPG);

