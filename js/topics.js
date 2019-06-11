javascript: (function(){
  var pagetitle = document.title;
  let headline = pagetitle.split(" | ")[0];
  let searchString = encodeURIComponent(headline);
  let url = 'http://www.topics.nl/zoek/?query=' + searchString;
  window.open(url, '_blank');
})();
