function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import "./index.css";
var taskName = "";
var questions = [];
var answers = [];
var results = new Map();
var way = [];
var step = 0;
var last = 0;
window.onload = init;

function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "/question";
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  options = _objectSpread({
    path: path
  }, options);

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (var optionKey in options) {
    updatedCookie += "; " + optionKey;
    var optionValue = options[optionKey];

    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function getDataDB(taskName) {
  questions = ["HEllo?", "NotHello"];
  answers = [["Y", "N"], ["Y", "N"]];
  way = [["Moskva", "Tver"], ["Tver", "Moskva"]];
  return [questions, answers, way];
}

function init() {
  var taskName = getCookie("taskName");

  var _getDataDB = getDataDB(taskName);

  var _getDataDB2 = _slicedToArray(_getDataDB, 3);

  this.questions = _getDataDB2[0];
  this.answers = _getDataDB2[1];
  this.way = _getDataDB2[2];
  step = 0;
  last = this.questions.length - 1;
  initUI();
}

function initUI() {
  var _this = this;

  var div = document.querySelector("#answers");
  var answerField = "";
  document.querySelector("#task").innerText = this.taskName;
  document.querySelector("#question").innerText = this.questions[step];
  this.answers[step].forEach(function (e, index) {
    answerField += '<div>\
							<input type="radio" id="ANS' + index + '" class="answers" name="answer' + _this.questions[step] + '" value="' + e + '"/>\n\
							<label for="ANS' + index + '">' + e + '</label>\
						</div>';
  });
  div.innerHTML = answerField;
}

function initFinishUI() {
  var result = finishQuestion();
  document.querySelector(".container").innerHTML = '<h1>' + result[0][0] + '</h1>';
}

function sendResult() {
  if (document.querySelector(".answers:checked") == undefined) {
    alert("Выберите ваш ответ!");
    return;
  }

  var userAnswer = 0;
  userAnswer = document.querySelector(".answers:checked").id.substr(3);
  resultForming(this.taskName, step, parseInt(userAnswer));
}

function resultForming(taskName, question, userAnswer) {
  if (taskName != this.taskName) {
    throw new Error("Question is not equal:\n" + taskName + " !equal " + this.taskName);
  }

  console.log(taskName + " " + question + " " + userAnswer);
  results.set(way[question][userAnswer], results.get(way[question][userAnswer]) == undefined ? 1 : results.get(way[question][userAnswer]) + 1);

  if (step != last) {
    step++;
    initUI();
  } else {
    initFinishUI();
  }
}

function finishQuestion() {
  var result = [];
  results.forEach(function (val, key) {
    if (result.length === 0) {
      result = [[key, val]];
    } else if (result[0][1] < val) {
      result = [[key, val]];
    } else if (result[0][1] === val) {
      result.push([key, val]);
    }
  });
  return result;
}