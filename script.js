
const badWords = ['arse', 'git', 'bullshit'];

document.querySelector('button').onclick = () => {
	let text = document.querySelector('textarea').value;

	for (let i = 0; i < badWords.length; i++) {
		// badWords[i]

		while(text.indexOf(badWords[i]) != -1) {
			text = text.replace(badWords[i], star(badWords[i].length)); // заменяем в тексте плохие слова на *
		}
	}
	document.querySelector('#out').innerHTML += '<div class = "comment">' + text + '</div>';
}
// 	while(text.indexOf(badWords[i]) != -1) - если слово есть, оно равно 0, если = -1, его нет
// indexOf возвращает позицию от строки в строке.
// пока не найшли слово, не вышли из списка

function star(n) {
		let out = '';

		for (let i = 0; i < n; i++){
			out += '*';
		}
	return out;
}
// функция для подсчета звездочек