var quotesList = ['hello', 'dude', 'crazy', 'world', 'love'];
var button = document.getElementById('quoteEvent');
var sentence = (document.getElementsByClassName('quoteSentence'));
var arr = [];
for(var i = 0, n; n = sentence[i]; ++i) {
	arr.push(n);
}


button.addEventListener('click', function() {
		var randomList = random(arr);
		var randomQuote = random(quotesList);
		sentence[arr].textContent = randomQuote;
	
});

function random(index) {
	var randomnum = Math.floor(Math.random() * index.length);
	return quotesList[randomnum];

}

