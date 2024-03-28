// function hideBlock() {
// 	document.querySelector('.main-container').style.display = 'none';
// 	document.querySelector('.container').style.display = 'flex';
// 	let footer = document.querySelector('.footer');
// 	footer.style.position = 'absolute';
// 	footer.style.width = '95vw';
// 	footer.style.bottom = '0';
// }
// let taskName = "";
// let questions = [];
// let answers = [];
// let results = new Map();
// let way = [];
// let step = 0;
// let last = 0;
// window.onload = init
// function getCookie(name) {
// let matches = document.cookie.match(new RegExp(
// "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
// ));
// return matches ? decodeURIComponent(matches[1]) : undefined;
// } 
// // возможно куки не нужны
// function setCookie(name, value, path = "/question", options = {}) {
// options = {
// path: path,
// ...options
// };
// if (options.expires instanceof Date) {
// options.expires = options.expires.toUTCString();
// }
// let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
// for (let optionKey in options) {
// updatedCookie += "; " + optionKey;
// let optionValue = options[optionKey];
// if (optionValue !== true) {
//   updatedCookie += "=" + optionValue;
// }
// }
// document.cookie = updatedCookie;
// }
// function getDataDB(taskName) {
// questions = ["Как проведешь выходные?", "Друзья пригласили тебя в\u00A0бар. Что\u00A0закажешь?", "Какая музыка у\u00A0тебя в\u00A0плейлисте?", "Ты\u00A0собираешься на\u00A0свидание. В\u00A0чём пойдешь?", "Куда пойдешь, если захочешь уединиться?", "Где покупаешь кофе, когда едешь на\u00A0работу?"];
// answers = [["Встречусь с\u00A0друзьями в\u00A0кафе", "Буду лежать на\u00A0диване и\u00A0смотреть сериалы", "Схожу на\u00A0несколько мероприятий, а\u00A0потом загляну на\u00A0вечеринку", "Схожу в\u00A0парк, уточек покормлю"], ["Бокал вина", "Что подешевле, цены в\u00A0барах – просто ужас", "Необычный коктейль", "Возьму сок/лимонад"], ["Русский рок и\u00A0локальные группы, о\u00A0которых мало кто знает", "Хип-хоп и\u00A0рэп", "Хлопья летят наверх", "Всё вперемешку"], ["Что-нибудь «не\u00A0на\u00A0каждый день»", "В\u00A0том, что выпадет из\u00A0шкафа", "Надену что-нибудь стильное, но\u00A0не\u00A0броское", "Не\u00A0пойду"], ["В\u00A0любимую кофейню", "В\u00A0бар", "Пойду в\u00A0парк", "В\u00A0ванную"], ["Чем дешевле, тем лучше", "Мне неважно, главное – большой объем", "Я\u00A0дома кофе пью…", "В\u00A0любимой кофейне"]];
// way = [["Долгопрудный", "Зеленоград", "Одинцово", "Спас"], ["Долгопрудный", "Зеленоград", "Одинцово", "Спас"], ["Спас", "Зеленоград", "Одинцово", "Долгопрудный"], ["Одинцово", "Долгопрудный", "Спас", "Зеленоград"], ["Долгопрудный", "Одинцово", "Спас", "Зеленоград"], ["Спас", "Одинцово", "Зеленоград", "Долгопрудный"]];
// return [questions, answers, way]
// }
// function init() {
// let taskName = getCookie("taskName");
// [this.questions, this.answers, this.way] = getDataDB(taskName);
// step = 0;
// last = this.questions.length-1
// initUI();
// }
// function initUI() {
// let div = document.querySelector("#answers");
// let answerField = "";
// document.querySelector("#question").innerText = this.questions[step];
// this.answers[step].forEach((e, index) => {
// 	answerField += '<div style="margin-bottom: 0.83vw;">\
// 						<input type="radio" id="ANS' + index + '" class="answers" name="answer' + this.questions[step] + '" value="' + e + '"/>\n\
// 						<label for="ANS' + index + '">' + e + '</label>\
// 					</div>'
// });
// div.innerHTML = answerField;
// }
// function initFinishUI() {
// let result = finishQuestion();
// let container = document.querySelector(".container");
// let resultDiv = document.createElement('div');
// resultDiv.classList.add('result');
// let congrats = "Поздравляем, ты – " + result[0][0] + "!";
// let description = "";
// switch (result[0][0]) {
// 	case "Долгопрудный":
// 		description = "Ты&nbsp;очень умный, добрый человек. У&nbsp;тебя большой жизненный опыт, к&nbsp;сожалению, не&nbsp;весь он&nbsp;позитивный, но&nbsp;это не&nbsp;мешает тебе любить жизнь и&nbsp;радоваться&nbsp;ей. Ты&nbsp;часто выбираешь уже проверенный вариант, предпочитая больше не&nbsp;рисковать, а&nbsp;наслаждаться гарантированно не&nbsp;самым худшим выбором. Откройся новому и&nbsp;увидишь, что ты&nbsp;можешь достигнуть гораздо большего, чем достиг сейчас";
// 		break;
// 	case "Зеленоград":
// 		description = "Ты&nbsp;предпочитаешь тишину шуму и&nbsp;любишь быть один. Ты&nbsp;часто скрываешь свои эмоции и&nbsp;предпочитаешь справляться с&nbsp;проблемами самостоятельно, не&nbsp;любишь просить помощи, даже когда это нужно. Тревожность иногда может захватывать тебя полностью и&nbsp;ты&nbsp;начинаешь закрываться ещё больше, но&nbsp;нужно стараться противостоять&nbsp;ей. Откройся людям вокруг, расскажи своим близким о&nbsp;том, что ты&nbsp;чувствуешь и&nbsp;не&nbsp;стесняйся получать поддержку! Ты&nbsp;этого заслуживаешь";
// 		break;
// 	case "Одинцово":
// 		description = "Ты&nbsp;очень открыт к&nbsp;этому миру, к&nbsp;тебе тянутся люди и&nbsp;ты&nbsp;к&nbsp;ним тоже! Ты&nbsp;невероятно разный человек, имеющий множество разных хобби и&nbsp;увлечений, кажется, ты&nbsp;умеешь всё. Ты&nbsp;всегда готов к&nbsp;риску и&nbsp;готов пробовать новое, не&nbsp;боишься перемен. Постарайся сохранить в&nbsp;себе эту открытость и&nbsp;жажду новизны, что&nbsp;бы в&nbsp;будущем не&nbsp;жалеть о&nbsp;том, что что-то не&nbsp;успел или постеснялся сделать";
// 		break;
// 	case "Спас":
// 		description = "Ты&nbsp;невероятно уютный, солнечный человек, который любит природу и&nbsp;мир вокруг себ. Ты&nbsp;совсем не&nbsp;привередливый, радуешься мелочам и&nbsp;любишь жизнь такой, какая она есть. Тебе совсем не&nbsp;обязательно нужна большая компания друзей, чтобы чувствовать себя хорошо, тебе хватит и&nbsp;парочки самых близких людей, которых ты&nbsp;точно будешь очень сильно ценить. Не&nbsp;гонись за&nbsp;количеством, чаще думай о&nbsp;качестве вещей и&nbsp;тогда ты&nbsp;точно будеш счастлив";
// 		break;
// 	default:
// 		description = "Ты – " + result[0][0] + ".";
// }
// resultDiv.innerHTML = "<h1 class='congrats'>" + congrats + "</h1><p class='description'>" + description + "</p>";
// let learnMoreDiv = document.createElement('div');
// learnMoreDiv.classList.add('learn-more');
// learnMoreDiv.innerHTML = "<p>Теперь, когда ты&nbsp;знаешь, какой из&nbsp;городов тебе больше всего подходит, почему&nbsp;бы не&nbsp;отправиться туда? Может быть, это твоя судьба и&nbsp;это место станет твоим вторым домом? Не&nbsp;узнаешь, пока не&nbsp;отправишься туда! А&nbsp;пока ты&nbsp;думаешь о&nbsp;своем трипе, предлагаем тебе прочитать наши статьи, чтобы лучше понять, куда мы&nbsp;предлагаем тебе поехать</p><button id='articles-btn'>К статьям</button>";
// resultDiv.appendChild(learnMoreDiv);
// container.appendChild(resultDiv);
// let articlesBtn = document.getElementById('articles-btn');
// articlesBtn.addEventListener('click', function() {
// 	window.location.href = '../trips.html';
// });
// }
// function sendResult() {
// if (document.querySelector(".answers:checked") == undefined) {
// 	alert("Выберите ваш ответ!")
// 	return
// }
// let userAnswer = 0;
// userAnswer = document.querySelector(".answers:checked").id.substr(3)
// resultForming(this.taskName, step, parseInt(userAnswer));
// }
// function resultForming(taskName, question, userAnswer) {
// if (taskName != this.taskName) {
// 	throw new Error("Question is not equal:\n" + taskName + " !equal " + this.taskName);
// }
// console.log(taskName + " " + question + " " + userAnswer)
// results.set(way[question][userAnswer], results.get(way[question][userAnswer]) == undefined ? 1 : results.get(way[question][userAnswer]) + 1);
// if (step != last) {
// 	step++;
// 	initUI();
// } else {
// 	document.querySelector(".container").innerHTML = '';
// 	initFinishUI();
// }
// }
// function finishQuestion() {
// let result = [];
// results.forEach((val, key) => {
// 	if (result.length === 0) {
// 		result = [[key, val]];
// 	} else if (result[0][1] < val) {
// 		result = [[key, val]];
// 	} else if (result[0][1] === val) {
// 		result.push([key, val]);
// 	}
// })
// return result
// }