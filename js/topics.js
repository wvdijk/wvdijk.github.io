javascript: (function(){
  let headline = document.title.split(" | ")[0];
  let searchString = encodeURIComponent(headline);
  let url = 'http://www.topics.nl/zoek/?query=' + searchString;
  window.open(url, '_blank');
})();
