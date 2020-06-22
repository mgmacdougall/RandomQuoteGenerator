/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// const debugLog = (data) => console.log(data); // debugging only, remove when done

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
		year: 'January 20, 1961',
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
const randomNumber = () => Math.floor(Math.random() * quotes.length); // not using the +1 syntax b/c using the floor()
const getRandomQuote = () => quotes[randomNumber()];

// interval
const autoReload = () => {
	setInterval(() => {
		displayQuote();
	}, 15000);
};

const getRandomColor = () => {
	return Math.floor(Math.random() * 255) + 1;
};

const displayQuote = () => {
	let html = '';
	let quoteData = getRandomQuote();

	let quoteBox = document.getElementById('quote-box');
	quoteBox.style.backgroundColor = html += `<p class="quote"> ${quoteData.quote}</p>`;
	html += `<p class="source">${quoteData.source}`;
	if (quoteData.citation) {
		html += `<span> "${quoteData.citation}"</span>`;
	}
	if (quoteData.year) {
		html += `<span> (${quoteData.year})</span>`;
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
	autoReload();
};
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener('click', printQuote, false);
