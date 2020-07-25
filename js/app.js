'use strict';

var nameinput = prompt('What is your name?');
// console.log('Hello! Welcome to my page, ' + nameinput + '. My name is Doug. Let\'s play a game. I\'m going to ask you five questions, to see if you really know me.');
alert('Hello! Welcome to my page, ' + nameinput + '. My name is Doug. Let\'s play a game. I\'m going to ask you five questions, to see if you really know me.');

// Question 1

var answer1 = prompt('Am I from a foreign country?', 'Type yes or no.').toLowerCase();
while (answer1 !== 'yes' && answer1 !== 'no' && answer1 !== 'y' && answer1 !== 'n') {
  answer1 = prompt('Please answer yes or no....nothing else');
}
if (answer1 === 'yes' || answer1 === 'y') {
  // console.log('That\'s right, I\'m from Canada!');
  alert('That\'s right, I\'m from Canada!');
} else if (answer1 === 'no' || answer1 === 'n') {
  // console.log('Nope, you ungrateful colonists, I\'m from Canada!');
  alert('Nope, you ungrateful colonists, I\'m from Canada!');
}

// Question 2

var answer2 = prompt('Am I a Hockey Fan?', 'Type yes or no.').toLowerCase();
while (answer2 !== 'yes' && answer2 !== 'no' && answer2 !== 'y' && answer2 !== 'n') {
  answer2 = prompt('Please answer yes or no....nothing else');
}
if (answer2 === 'yes' || answer2 === 'y') {
  // console.log('absolutely correct, I\'m from Canada!');
  alert('Absolutely correct, I\'m from Canada!');
} else if (answer2 === 'no' || answer2 === 'n') {
  // console.log('WRONG ANSWER! I\'m from Canada!');
  alert('WRONG ANSWER! I\'m from Canada!');
}

// Question 3

var answer3 = prompt('Do I like Poutine?', 'Type yes or no.').toLowerCase();
while (answer3 !== 'yes' && answer3 !== 'no' && answer3 !== 'y' && answer3 !== 'n') {
  answer3 = prompt('Please answer yes or no....nothing else');
}
if (answer3 === 'yes' || answer3 === 'y') {
  // console.log('Of course I do, I\'m from Canada!');
  alert('Of course I do, I\'m from Canada!');
} else if (answer3 === 'no' || answer3 === 'n') {
  // console.log('WRONG ANSWER! I\'m from Canada!');
  alert('WRONG ANSWER! I\'m from Canada!');
}

// Question 4

var answer4 = prompt('Do I watch Curling?', 'Type yes or no.').toLowerCase();
while (answer4 !== 'yes' && answer4 !== 'no' && answer4 !== 'y' && answer4 !== 'n') {
  answer4 = prompt('Please answer yes or no....nothing else');
}
if (answer4 === 'yes' || answer4 === 'y') {
  // console.log('Of course I do, I\'m from Canada!');
  alert('Of course I do, I\'m from Canada!');
} else if (answer4 === 'no' || answer4 === 'n') {
  // console.log('WRONG ANSWER! I\'m from Canada!');
  alert('WRONG ANSWER! I\'m from Canada!');
}

// Question 5

var answer5 = prompt('Do I listen to Rush?', 'Type yes or no.').toLowerCase();
while (answer5 !== 'yes' && answer5 !== 'no' && answer5 !== 'y' && answer5 !== 'n') {
  answer5 = prompt('Please answer yes or no....nothing else');
}
if (answer5 === 'yes' || answer5 === 'y') {
  // console.log('Nope, just because I\'m from Canada, doesn\'t mean that I like Rush!');
  alert('Nope, just because I\'m from Canada, doesn\'t mean that I like Rush!. Thanks for playing ' + nameinput + '.');
} else if (answer5 === 'no' || answer5 === 'n') {
  // console.log('You are correct! Just because I\'m from Canada, doesn\'t mean that I like Rush...they suck!');
  alert('You are correct! Just because I\'m from Canada, doesn\'t mean that I like Rush...they suck! Thanks for playing ' + nameinput + ', now on to some tricky questions.');
}

// Question 6

var answer6 = prompt('I\'m thinking of a number between 1 and 10. Can you guess what that number is? I\'ll give you four bites at the apple').toLowerCase;
if (answer6 === 7) {
  // console.log('Hey, you\re good at this, nice work.');
  alert('Hey, you\'re good at this, nice work.');
} else if (answer6 < 7) {
  // console.log('Good guess, but not quite right. Too low. Try again.');
  alert('Good guess, but not quite right. Too low. Try again.');
} else if (answer6 > 7) {
  // console.log('Good guess, but not quite right. Too high. Try again.');
  alert('Good guess, but not quite right. Too high. Try again.');
}

// Question 7

var answer7 = prompt('If I could eat only four foods for the rest of my life, I would be just fine. Can you name one of those four?').toLowerCase;
var foodsILike = ['peanut butter', 'steak', 'seafood', 'rice'];
for (var i = 0; i < 6; i++)
  If(var answer7 = var foodsILike) {
    // console.log('Nice work");
    alert('Nice Work');
} else if (var answer7 != var foodsILike) {
  // console.log('Try again');
  alert('Try again');
}

