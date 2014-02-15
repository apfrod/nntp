function save_url(n){
  localStorage["link_"+n+"_url"] = document.getElementById("link_"+n+"_url").value;
  localStorage["link_"+n+"_text"] = document.getElementById("link_"+n+"_text").value;
  localStorage["link_"+n+"_color"] = document.getElementById("link_"+n+"_color").value;
}
function load_url(n){
  var url = localStorage["link_"+n+"_url"];
  if (!url){
    url = '';
  }
  document.getElementById("link_"+n+"_url").value = url;

  var text = localStorage["link_"+n+"_text"];
  if (!text){
    text = '';
  }
  document.getElementById("link_"+n+"_text").value = text;
  
  var color = localStorage["link_"+n+"_color"];
  if (!color){
    color = '#eeeeee';
  }
  document.getElementById("link_"+n+"_color").value = color;
}

// Load saved options
function restore_options() {
  for (var i = 0; i<4; i++){
    load_url(i+1);
  }
}
// Saves options to localStorage.
function save_options() {
  for (var i = 0; i<4; i++){
    save_url(i+1);
  }
  // Build the preview here
  build_links();
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);