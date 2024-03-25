import "./index.css";

let taskName = "";
let questions = [];
let answers = [];
let results = new Map();
let way = [];
let step = 0;
let last = 0;

window.onload = init

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
	"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, path = "/question", options = {}) {

  options = {
	path: path,
	...options
  };

  if (options.expires instanceof Date) {
	options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
	updatedCookie += "; " + optionKey;
	let optionValue = options[optionKey];
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
	
	return [questions, answers, way]
}

function init() {
	let taskName = getCookie("taskName");
	
	[this.questions, this.answers, this.way] = getDataDB(taskName);
	step = 0;
	last = this.questions.length-1
	initUI();
}

function initUI() {
	let div = document.querySelector("#answers");
	let answerField = "";
	document.querySelector("#task").innerText = this.taskName;
	document.querySelector("#question").innerText = this.questions[step];
	
	this.answers[step].forEach((e, index) => {
		answerField += '<div>\
							<input type="radio" id="ANS' + index + '" class="answers" name="answer' + this.questions[step] + '" value="' + e + '"/>\n\
							<label for="ANS' + index + '">' + e + '</label>\
						</div>'
	});
	
	div.innerHTML = answerField;
}

function initFinishUI() {
	let result = finishQuestion();
	
	document.querySelector(".container").innerHTML = '<h1>' + result[0][0] + '</h1>'
}

function sendResult() {
	if (document.querySelector(".answers:checked") == undefined) {
		alert("Выберите ваш ответ!")
		return
	}
	
	let userAnswer = 0;
	
	userAnswer = document.querySelector(".answers:checked").id.substr(3)
	
	resultForming(this.taskName, step, parseInt(userAnswer));
}

function resultForming(taskName, question, userAnswer) {
	if (taskName != this.taskName) {
		throw new Error("Question is not equal:\n" + taskName + " !equal " + this.taskName);
	}
	
	console.log(taskName + " " + question + " " + userAnswer)
	results.set(way[question][userAnswer], results.get(way[question][userAnswer]) == undefined ? 1 : results.get(way[question][userAnswer]) + 1);
	
	if (step != last) {
		step++;
		initUI();
	} else {
		initFinishUI();
	}
}

function finishQuestion() {
	let result = [];

	results.forEach((val, key) => {
		if (result.length === 0) {
			result = [[key, val]];
		} else if (result[0][1] < val) {
			result = [[key, val]];
		} else if (result[0][1] === val) {
			result.push([key, val]);
		}
	})

	return result
}