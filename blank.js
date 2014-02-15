// Load one link
function load_link(n){
  var link = {};
  link.url = localStorage["link_"+n+"_url"];
  link.text = localStorage["link_"+n+"_text"];
  link.color = localStorage["link_"+n+"_color"];
  return link;
}

// Write links to the page
function build_links() {
  var middle = document.getElementById('middle');
  middle.innerHTML = "";
  for (var i = 0; i<4; i++){
    var link = load_link(i+1);

    if (link.url){
        middle.innerHTML += "<a id=\"link\""+i+"\" href=\""+link.url+"\" style=\"background: "+link.color+";\">"+link.text+"</a>";
    }
  }
}

build_links();