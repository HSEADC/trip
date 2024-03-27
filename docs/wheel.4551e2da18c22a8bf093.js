/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function shuffle(array) {
  var currentIndex = array.length,
      randomIndex;

  while (0 != currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    var _ref = [array[randomIndex], array[currentIndex]];
    array[currentIndex] = _ref[0];
    array[randomIndex] = _ref[1];
  }

  return array;
}

var currentAngle = 0;
var results = (/* unused pure expression or super */ null && ([]));

function spinWheel() {
  var box = document.getElementById("box");
  var element = document.getElementById("mainbox");
  var SelectedItem = "";
  var Klin = shuffle([1890, 2250, 2610]);
  var Tarusa = shuffle([1890, 2210, 2570]);
  var Podolsk = shuffle([1770, 2130, 2490]);
  var Shatura = shuffle([1910, 2170, 2530]);
  var Ivanovo = shuffle([1750, 2110, 2470]);
  var Kostroma = shuffle([1750, 2110, 2470]);
  var newResults = shuffle([Klin[0], Tarusa[0], Podolsk[0], Shatura[0], Ivanovo[0], Kostroma[0]]);
  results = results.concat(newResults);
  if (Klin.includes(newResults[0])) SelectedItem = "Клин";
  if (Tarusa.includes(newResults[0])) SelectedItem = "Таруса";
  if (Podolsk.includes(newResults[0])) SelectedItem = "Подольск";
  if (Shatura.includes(newResults[0])) SelectedItem = "Шатура";
  if (Ivanovo.includes(newResults[0])) SelectedItem = "Иваново";
  if (Kostroma.includes(newResults[0])) SelectedItem = "Кострома";
  var rotationAngle = currentAngle + newResults[0];
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + rotationAngle + "deg)";
  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
    setTimeout(function () {// alert
    });
  }, 100);
  currentAngle = rotationAngle;
}
/******/ })()
;