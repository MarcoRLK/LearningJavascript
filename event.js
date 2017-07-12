var a = document.getElementById('num1');
var b = document.getElementById('num2');
var result = document.getElementById('result_');

a.addEventListener('input', add);
b.addEventListener('input', add);

function add() {
  var aa = parseFloat(a.value) || 0;
  var bb = parseFloat(b.value) || 0;
  result.innerHTML = 'O resultado da soma é: ' + (aa + bb);
}

var maca = document.getElementById('maca');
var pera = document.getElementById('pera');
var uva = document.getElementById('uva');

maca.addEventListener('click', showPic);
pera.addEventListener('click', showPic);
uva.addEventListener('click', showPic);

function showPic() {
  //getting the data-img attibute from the link.
  //this attibute matches with his pic id
  var fruitId = this.attributes['data-img'].value;
  //now we can get the pic
  var pic = document.getElementById(fruitId);

  console.log(pic.className);
  if (pic.className === 'hidden') {
    pic.className = '';
  } else {
    pic.className = 'hidden';
  }
}
