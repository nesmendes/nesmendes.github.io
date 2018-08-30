// Encode an SVG element as a base64 data uri.
function svgToBase64Image(svgElement) {
  var div = document.createElement("div");
  div.appendChild(svgElement.cloneNode(true));
  var b64 = window.btoa(div.innerHTML);
  return "data:image/svg+xml;base64," + b64;
}
var svgs = document.getElementsByTagName("svg");
var urls = [];
for (var i = 0; i < svgs.length; i++)
  urls.push('url("' + svgToBase64Image(svgs[i]) + '")');
var url = urls.join(",");
var msg =
  "Base64 CSS image (for cross-browser support):" +
  "<br><br>background: " +
  url +
  ";";
document.getElementById("code").innerHTML = msg;
document.body.style.background = url;
