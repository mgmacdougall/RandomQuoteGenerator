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
const quotes = [{ quote: 'test' }, { quote: 'test1' }, { quote: 'test2' }, { quote: 'test3' }, { quote: 'test4' }];

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
