/***
 * `quotes` array
 ***/
const quotes = [
	{ quote: 'I never really felt like a rock singer or a rock star or whatever', source: 'David Bowie' },
	{ quote: "If you pour some music on whatever's wrong, it'll sure help out.", source: 'Levon Helm' },
	{ quote: 'Everything is scary if you look at it. So you just got to live it.', source: 'Mary J. Blige' },
	{ quote: 'Be yourself; everyone else is already taken.', source: 'Oscar Wilde' },
	{
		quote: 'Ask not what your country can do for you, ask what you can do for your country.',
		source: 'John F. Kennedy',
		citation: "John F. Kennedy's Inaugural Address",
		year: '1961',
		tag: 'Motivation',
	},
	{
		quote: 'Everything good, everything magical happens between the months of June and August.',
		source: 'Jenny Han',
		citation: 'The Summer I Turned Pretty',
	},
];

/***
 * `getRandomQuote` function
 ***/
const randomQuoteIndex = () => Math.floor(Math.random() * quotes.length);
const getRandomQuote = () => quotes[randomQuoteIndex()];

/***
 * `getRandomColor` creates a random color value
 */
const getRandomColor = () => {
	return Math.floor(Math.random() * 255) + 1;
};

/***
 * `displayQuote` displays the quote in
 */
const displayQuote = () => {
	let html = '';
	let quoteData = getRandomQuote();

	let quoteBox = document.getElementById('quote-box');
	quoteBox.style.backgroundColor = html += `<p class="quote"> ${quoteData.quote}</p>`;

	html += `<p class="source">${quoteData.source}`;
	if (quoteData.citation) {
		html += `<span class="citation"> "${quoteData.citation}"</span>`;
	}

	if (quoteData.year) {
		html += `<span class="year">${quoteData.year}</span>`;
	}

	if (quoteData.tag) {
		html += `<span style="font-style: italic;">, <a href="#" style="text-decoration: none; color:white;">${quoteData.tag}</a></span>`;
	}

	html += `</p>`;

	let body = document.querySelector('body');

	body.style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
	quoteBox.innerHTML = html;
};

/***
 * `printQuote` function
 ***/
const printQuote = () => {
	displayQuote();
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener('click', printQuote, false);
