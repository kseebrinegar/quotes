var quotesList = ['hello', 'dude', 'crazy', 'world', 'love'];
var button = document.getElementById('quoteEvent');
var sentence = document.getElementsByClassName('quoteSentence');


button.addEventListener('click', function() {
	// 
	for (var i = 0; i < sentence.length; i++) {
		if (sentence[i].textContent) {
			console.log('yes');
			sentence[i].textContent = '';
		
		} else {
			break;
		}
	}
		

	var randomNumber = num();
	var randomQuote = random();
	sentence[randomNumber].textContent = randomQuote;

});


function num() {
	var randomnum = Math.floor(Math.random() * sentence.length);
	return randomnum;

}

function random() {
	var randomnum = Math.floor(Math.random() * quotesList.length);
	return quotesList[randomnum];

}





