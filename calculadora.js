function concatena(valor) {
  document.getElementById('calculo').value += valor;
}

function limpia() {
  document.getElementById('calculo').value;
}

function calcula() {
  document.getElementById('res').value = eval(document.getElementById('calculo').value);
}
