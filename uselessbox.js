var photos = [
  "https://www.voeazul.com.br/en/voeazul/media/image/br-flag.svg",
  "http://www.banderas-mundo.es/data/flags/ultra/es.png"
];

var index = 0;

function cambia() {
  if (index) {
    index = 0;
  }
  else {
    index = 1;
  }
  document.getElementById('photos').src = photos[index];
}

function shy() {
  document.getElementById('shy').style.visibility = "hidden";
}
