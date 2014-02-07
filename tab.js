var query = {
  text: '',
  startTime: (new Date()).getTime()-7*24*3600*1000*2 // 2 weeks ago
};

chrome.history.search(query, function(last_weeks_urls){

  // Sort by visit count
  last_weeks_urls.sort(function(a,b){
    if (a.visitCount < b.visitCount){
     return 1;
    }
    if (a.visitCount > b.visitCount){
     return -1;
    }
    return 0;
  });

  // Make sure they're unique
  var already_added = [];
  already_added.push(last_weeks_urls[0].title);

  last_weeks_urls.forEach (function(page, i, a){

    if (already_added.indexOf(page.title) === -1){
      // Add unique pages to already_added
      already_added.push(page.title);
      document.write("<div><a href=\""+page.url+"\">"+page.title+"</a></div>");
    }

    // Cut short this loop
    if (already_added.length === 18){
      a.length = 0;
    }

  });
  // Styles
  document.write("<style>body {font-family: sans-serif; font-size: 14pt;} a {color: #999; text-decoration: none;} div { margin: 0.75em;} a:hover {color: #111;}</style>");
});
