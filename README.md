# Bookmarklets voor NRC

Dit is een collectie bookmarklets (e.a) die ik in de loop der jaren heb gemaakt voor het online team.

## Installatie

Deze bookmarklets zijn als knop installeerbaar via [https://www.nrc.nl/lezersdeskknoppen](https://www.nrc.nl/lezersdeskknoppen)

## Beschrijving
[editinhonk.html](/editinhonk.html)  
[js/editinhonk.js](js/editinhonk.js)  
Om een artikel te kunnen bewerken in Honk als de bookmarklet niet beschikbaar is, bijvoorbeeld in een mobiele browser. Zonder GN4-check.

[js/calcReadingTime.js](js/calcReadingTime.js)  
Bookmarklet om de gemiddelde leestijd (in seconden) te berekenen voor het artikel op je scherm. Gebruikt dezelfde code als de site.

[js/getJpeg.js](js/getJpeg.js)  
Om makkelijk een jpeg van de featured image te downloaden. Handig nu we standaard WebP serveren.

[js/leesook.js](js/leesook.js)  
Genereer lees-ook-code voor het artikel dat je op je scherm hebt, om te plakken in Honk:
```html
<div class="lees-ook">Lees ook <a href="link">Kop</a></div>
```

[js/podcastify.js](js/podcastify.js)  
Genereer luister-ook-code van de NRC-podcast die je op je scherm hebt, om te plakken in een (gerelateerd) artikel in Honk. Nieuwe versie, gebaseerd op [js/leesook.js](js/leesook.js), werkt ook met NRC Audio:
```html
<div class="luister-ook" data-article-url="link"></div>
```

[js/topics.js](js/topics.js)  
Deze heeft niks met NRC te maken, maar je kunt er alle artikelen van alle Persgroep-titels mee opzoeken op hun platform Topics.nl. dan heb je natuurlijk wel toegang tot Topics nodig, via een abonnement op een van hun kranten. Maar als je dan op de site van een ándere Persgroepkrant op de betaalmuur stuit, kun je de Topics-versie van hetzelfde stuk met deze bookmarklet vinden en lezen. Installatie:

```javascript
javascript:void((function(){var s = document.createElement('script');
var h = Math.round((new Date).getTime() / 3600000);
s.src = 'https://wvdijk.github.io/js/topics.js?v=' + h;
document.getElementsByTagName('head')[0].appendChild(s);})());
```

[utm/*.js](/utm/)  
Deze bookmarklets genereren linkjes met UTM-codes erachter, voor gebruik op sociale media.
