'use strict';

var nameinput;

askName();
function askName() {
  nameinput = prompt('What is your name?');
  // console.log('Hello! Welcome to my page, ' + nameinput + '. My name is Doug. Let\'s play a game. I\'m going to ask you five questions, to see if you really know me.');
  alert('Hello! Welcome to my page, ' + nameinput + '. My name is Doug. Let\'s play a game. I\'m going to ask you five questions, to see if you really know me.');
}

// Function 1

askAnswer1();
function askAnswer1() {
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
}

// Function 2

askAnswer2();
function askAnswer2() {
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
}

// Function 3

askAnswer3();
function askAnswer3() {
  var answer3 = prompt('Do I like Poutine?', 'Type yes or no.');
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
}

// Function 4

askAnswer4();
function askAnswer4() {
  var answer4 = prompt('Do I watch Curling?');
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
}

// Function 5

askAnswer5();
function askAnswer5() {
  var answer5 = prompt('Do I listen to Rush?');
  while (answer5 !== 'yes' && answer5 !== 'no' && answer5 !== 'y' && answer5 !== 'n') {
    answer5 = prompt('Please answer yes or no....nothing else');
  }
  if (answer5 === 'yes' || answer5 === 'y') {
    // console.log('Nope, just because I\'m from Canada, doesn\'t mean that I like Rush!');
    alert('Nope, just because I\'m from Canada, doesn\'t mean that I like Rush!. Thanks for playing ' + nameinput + '.');
  } else if (answer5 === 'no' || answer5 === 'n') {
    // console.log('You are correct! Just because I\'m from Canada, doesn\'t mean that I like Rush...they suck!');
    alert('You are correct! Just because I\'m from Canada, doesn\'t mean that I like Rush...they suck! Thanks for playing ' + nameinput + '.');
  }
}
