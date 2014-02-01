
chrome.topSites.get(function(MostVisitedURLs){
  var already_added = [];
  already_added.push(MostVisitedURLs[0].title);
  MostVisitedURLs.forEach (function(page){
    if (already_added.indexOf(page.title) === -1){
      already_added.push(page.title);
      var clean = page.url.substring(page.url.indexOf(':')+3).replace('www.', '');
      document.write("<div><a href=\""+page.url+"\">"+clean+"</a></div>");
    }
  });
  document.write("<style>body {font-family: sans-serif; font-size: 14pt;} a {color: #999; text-decoration: none;} div { margin: 0.75em;} a:hover {color: #111;}</style>");
});
