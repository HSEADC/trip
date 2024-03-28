function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hideBlock() {
  document.querySelector('.main-container').style.display = 'none';
  document.querySelector('.container').style.display = 'flex';
  var footer = document.querySelector('.footer');
  footer.style.position = 'absolute';
  footer.style.width = '95vw';
  footer.style.bottom = '0';
}

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
} // возможно куки не нужны


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
  questions = ["Как проведешь выходные?", "\u0414\u0440\u0443\u0437\u044C\u044F \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u043B\u0438 \u0442\u0435\u0431\u044F \u0432\xA0\u0431\u0430\u0440. \u0427\u0442\u043E\xA0\u0437\u0430\u043A\u0430\u0436\u0435\u0448\u044C?", "\u041A\u0430\u043A\u0430\u044F \u043C\u0443\u0437\u044B\u043A\u0430 \u0443\xA0\u0442\u0435\u0431\u044F \u0432\xA0\u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435?", "\u0422\u044B\xA0\u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0448\u044C\u0441\u044F \u043D\u0430\xA0\u0441\u0432\u0438\u0434\u0430\u043D\u0438\u0435. \u0412\xA0\u0447\u0451\u043C \u043F\u043E\u0439\u0434\u0435\u0448\u044C?", "Куда пойдешь, если захочешь уединиться?", "\u0413\u0434\u0435 \u043F\u043E\u043A\u0443\u043F\u0430\u0435\u0448\u044C \u043A\u043E\u0444\u0435, \u043A\u043E\u0433\u0434\u0430 \u0435\u0434\u0435\u0448\u044C \u043D\u0430\xA0\u0440\u0430\u0431\u043E\u0442\u0443?"];
  answers = [["\u0412\u0441\u0442\u0440\u0435\u0447\u0443\u0441\u044C \u0441\xA0\u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438 \u0432\xA0\u043A\u0430\u0444\u0435", "\u0411\u0443\u0434\u0443 \u043B\u0435\u0436\u0430\u0442\u044C \u043D\u0430\xA0\u0434\u0438\u0432\u0430\u043D\u0435 \u0438\xA0\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u0435\u0440\u0438\u0430\u043B\u044B", "\u0421\u0445\u043E\u0436\u0443 \u043D\u0430\xA0\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439, \u0430\xA0\u043F\u043E\u0442\u043E\u043C \u0437\u0430\u0433\u043B\u044F\u043D\u0443 \u043D\u0430\xA0\u0432\u0435\u0447\u0435\u0440\u0438\u043D\u043A\u0443", "\u0421\u0445\u043E\u0436\u0443 \u0432\xA0\u043F\u0430\u0440\u043A, \u0443\u0442\u043E\u0447\u0435\u043A \u043F\u043E\u043A\u043E\u0440\u043C\u043B\u044E"], ["Бокал вина", "\u0427\u0442\u043E \u043F\u043E\u0434\u0435\u0448\u0435\u0432\u043B\u0435, \u0446\u0435\u043D\u044B \u0432\xA0\u0431\u0430\u0440\u0430\u0445 \u2013 \u043F\u0440\u043E\u0441\u0442\u043E \u0443\u0436\u0430\u0441", "Необычный коктейль", "Возьму сок/лимонад"], ["\u0420\u0443\u0441\u0441\u043A\u0438\u0439 \u0440\u043E\u043A \u0438\xA0\u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0433\u0440\u0443\u043F\u043F\u044B, \u043E\xA0\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043C\u0430\u043B\u043E \u043A\u0442\u043E \u0437\u043D\u0430\u0435\u0442", "\u0425\u0438\u043F-\u0445\u043E\u043F \u0438\xA0\u0440\u044D\u043F", "Хлопья летят наверх", "Всё вперемешку"], ["\u0427\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \xAB\u043D\u0435\xA0\u043D\u0430\xA0\u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C\xBB", "\u0412\xA0\u0442\u043E\u043C, \u0447\u0442\u043E \u0432\u044B\u043F\u0430\u0434\u0435\u0442 \u0438\u0437\xA0\u0448\u043A\u0430\u0444\u0430", "\u041D\u0430\u0434\u0435\u043D\u0443 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u0441\u0442\u0438\u043B\u044C\u043D\u043E\u0435, \u043D\u043E\xA0\u043D\u0435\xA0\u0431\u0440\u043E\u0441\u043A\u043E\u0435", "\u041D\u0435\xA0\u043F\u043E\u0439\u0434\u0443"], ["\u0412\xA0\u043B\u044E\u0431\u0438\u043C\u0443\u044E \u043A\u043E\u0444\u0435\u0439\u043D\u044E", "\u0412\xA0\u0431\u0430\u0440", "\u041F\u043E\u0439\u0434\u0443 \u0432\xA0\u043F\u0430\u0440\u043A", "\u0412\xA0\u0432\u0430\u043D\u043D\u0443\u044E"], ["Чем дешевле, тем лучше", "Мне неважно, главное – большой объем", "\u042F\xA0\u0434\u043E\u043C\u0430 \u043A\u043E\u0444\u0435 \u043F\u044C\u044E\u2026", "\u0412\xA0\u043B\u044E\u0431\u0438\u043C\u043E\u0439 \u043A\u043E\u0444\u0435\u0439\u043D\u0435"]];
  way = [["Долгопрудный", "Зеленоград", "Одинцово", "Спас"], ["Долгопрудный", "Зеленоград", "Одинцово", "Спас"], ["Спас", "Зеленоград", "Одинцово", "Долгопрудный"], ["Одинцово", "Долгопрудный", "Спас", "Зеленоград"], ["Долгопрудный", "Одинцово", "Спас", "Зеленоград"], ["Спас", "Одинцово", "Зеленоград", "Долгопрудный"]];
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
  document.querySelector("#question").innerText = this.questions[step];
  this.answers[step].forEach(function (e, index) {
    answerField += '<div style="margin-bottom: 0.83vw;">\
						<input type="radio" id="ANS' + index + '" class="answers" name="answer' + _this.questions[step] + '" value="' + e + '"/>\n\
						<label for="ANS' + index + '">' + e + '</label>\
					</div>';
  });
  div.innerHTML = answerField;
}

function initFinishUI() {
  var result = finishQuestion();
  var container = document.querySelector(".container");
  var resultDiv = document.createElement('div');
  resultDiv.classList.add('result');
  var congrats = "Поздравляем, ты – " + result[0][0] + "!";
  var description = "";

  switch (result[0][0]) {
    case "Долгопрудный":
      description = "Ты&nbsp;очень умный, добрый человек. У&nbsp;тебя большой жизненный опыт, к&nbsp;сожалению, не&nbsp;весь он&nbsp;позитивный, но&nbsp;это не&nbsp;мешает тебе любить жизнь и&nbsp;радоваться&nbsp;ей. Ты&nbsp;часто выбираешь уже проверенный вариант, предпочитая больше не&nbsp;рисковать, а&nbsp;наслаждаться гарантированно не&nbsp;самым худшим выбором. Откройся новому и&nbsp;увидишь, что ты&nbsp;можешь достигнуть гораздо большего, чем достиг сейчас";
      break;

    case "Зеленоград":
      description = "Ты&nbsp;предпочитаешь тишину шуму и&nbsp;любишь быть один. Ты&nbsp;часто скрываешь свои эмоции и&nbsp;предпочитаешь справляться с&nbsp;проблемами самостоятельно, не&nbsp;любишь просить помощи, даже когда это нужно. Тревожность иногда может захватывать тебя полностью и&nbsp;ты&nbsp;начинаешь закрываться ещё больше, но&nbsp;нужно стараться противостоять&nbsp;ей. Откройся людям вокруг, расскажи своим близким о&nbsp;том, что ты&nbsp;чувствуешь и&nbsp;не&nbsp;стесняйся получать поддержку! Ты&nbsp;этого заслуживаешь";
      break;

    case "Одинцово":
      description = "Ты&nbsp;очень открыт к&nbsp;этому миру, к&nbsp;тебе тянутся люди и&nbsp;ты&nbsp;к&nbsp;ним тоже! Ты&nbsp;невероятно разный человек, имеющий множество разных хобби и&nbsp;увлечений, кажется, ты&nbsp;умеешь всё. Ты&nbsp;всегда готов к&nbsp;риску и&nbsp;готов пробовать новое, не&nbsp;боишься перемен. Постарайся сохранить в&nbsp;себе эту открытость и&nbsp;жажду новизны, что&nbsp;бы в&nbsp;будущем не&nbsp;жалеть о&nbsp;том, что что-то не&nbsp;успел или постеснялся сделать";
      break;

    case "Спас":
      description = "Ты&nbsp;невероятно уютный, солнечный человек, который любит природу и&nbsp;мир вокруг себ. Ты&nbsp;совсем не&nbsp;привередливый, радуешься мелочам и&nbsp;любишь жизнь такой, какая она есть. Тебе совсем не&nbsp;обязательно нужна большая компания друзей, чтобы чувствовать себя хорошо, тебе хватит и&nbsp;парочки самых близких людей, которых ты&nbsp;точно будешь очень сильно ценить. Не&nbsp;гонись за&nbsp;количеством, чаще думай о&nbsp;качестве вещей и&nbsp;тогда ты&nbsp;точно будеш счастлив";
      break;

    default:
      description = "Ты – " + result[0][0] + ".";
  }

  resultDiv.innerHTML = "<h1 class='congrats'>" + congrats + "</h1><p class='description'>" + description + "</p>";
  var learnMoreDiv = document.createElement('div');
  learnMoreDiv.classList.add('learn-more');
  learnMoreDiv.innerHTML = "<p>Теперь, когда ты&nbsp;знаешь, какой из&nbsp;городов тебе больше всего подходит, почему&nbsp;бы не&nbsp;отправиться туда? Может быть, это твоя судьба и&nbsp;это место станет твоим вторым домом? Не&nbsp;узнаешь, пока не&nbsp;отправишься туда! А&nbsp;пока ты&nbsp;думаешь о&nbsp;своем трипе, предлагаем тебе прочитать наши статьи, чтобы лучше понять, куда мы&nbsp;предлагаем тебе поехать</p><button id='articles-btn'>К статьям</button>";
  resultDiv.appendChild(learnMoreDiv);
  container.appendChild(resultDiv);
  var articlesBtn = document.getElementById('articles-btn');
  articlesBtn.addEventListener('click', function () {
    window.location.href = '../trips.html';
  });
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
    document.querySelector(".container").innerHTML = '';
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