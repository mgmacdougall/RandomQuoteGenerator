/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

const debugLog = (data) => console.log(data); // debugging only, remove when done

/***
 * `quotes` array
 ***/
const quotes = [
	{ quote: 'I never really felt like a rock singer or a rock star or whatever', source: 'David Bowie' },
	{ quote: "If you pour some music on whatever's wrong, it'll sure help out.", source: 'Levon Helm' },
	{ quote: 'Everything is scary if you look at it. So you just got to live it.', source: 'Mary J. Blige' },
	{ quote: 'Be yourself; everyone else is already taken.', source: 'Oscar Wilde' },
	{ quote: 'The past has no power over the present moment.', source: 'Eckhart Tolle' },
];

/***
 * `getRandomQuote` function
 ***/
const randomNumber = () => Math.floor(Math.random() * quotes.length); // not using the +1 syntax b/c using the floor()
const getRandomQuote = () => quotes[randomNumber()];
/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

// document.getElementById('load-quote').addEventListener('click', printQuote, false);
