var photos = [
  "https://www.voeazul.com.br/en/voeazul/media/image/br-flag.svg",
  "http://www.banderas-mundo.es/data/flags/ultra/es.png",
  "https://lh3.googleusercontent.com/-QmEubC8Ird8/VnMC746zFhI/AAAAAAAALO4/QH4Ew_Ge-uc/s450-Ic42/08-bandera-1916-1934-historia-bandera-mexico.png",
  "http://www.sitographics.com/enciclog/banderas/europa/image_2012/Holanda.gif",
  "http://www.guiadealemania.com/wp-content/uploads/2011/01/Bandera-de-Alemania.png",
  "http://flags.fmcdn.net/data/flags/w580/no.png"
];

var index = 0;


setTimeout(function () {
  adelante();
}, 3000);

function adelante() {
  if (index < photos.length-1) {
    index++;
  }
  else {
    index = 0;
  }
  document.getElementById('photos').src = photos[index];
}

function atras() {
  if (index > 0) {
    index--;
  }
  else {
    index = photos.length-1;
  }
  document.getElementById('photos').src = photos[index];
}
