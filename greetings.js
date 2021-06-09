//greeting generator
//author: luo
//description: randomly choose a greeting from an array

const GREETINGS = [ "Nihao!", "Welcome to our page!", "Hello!", "Bonjour!", "Aloha!" ];

exports.greet = function getGreeting() 
{
	let rand = Math.floor(Math.random() * GREETINGS.length);
	return GREETINGS[rand];
} 