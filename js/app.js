'use strict';

var name = prompt('What is your name?');
console.log('Hello, welcome to my page,', name);
alert('Hello! Welcome to my page, ' + name + '.');

var answer1 = confirm('Am I from a foreign country?');
if (answer1 === true) {
  console.log('that\'s right, I\'m from Canada!');
  alert('that\'s right, I\'m from Canada!');
} else {
  console.log('Nope, you ungrateful colonists, I\'m from Canada!');
  alert('Nope, you ungrateful colonists, I\'m from Canada!');
}

var answer2 = confirm('Am I a Hockey Fan?');
if (answer1 === true) {
  console.log('absolutely correct, I\'m from Canada!');
  alert('absolutely correct, I\'m from Canada!');
} else {
  console.log('WRONG ANSWER! I\'m from Canada!');
  alert('WRONG ANSWER! I\'m from Canada!');
}

var answer3 = confirm('Do I like Poutine?');
if (answer1 === true) {
  console.log('Of course I do, I\'m from Canada!');
  alert('Of course I do, I\'m from Canada!');
} else {
  console.log('WRONG ANSWER! I\'m from Canada!');
  alert('WRONG ANSWER! I\'m from Canada!');
}

var answer4 = confirm('Do I watch Curling?');
if (answer1 === true) {
  console.log('Of course I do, I\'m from Canada!');
  alert('Of course I do, I\'m from Canada!');
} else {
  console.log('WRONG ANSWER! I\'m from Canada!');
  alert('WRONG ANSWER! I\'m from Canada!');
}

var answer5 = confirm('Do I listen to Rush?');
if (answer1 === true) {
  console.log('Nope, just because I\'m from Canada, doesn\'t mean that I like Rush!');
  alert('No, just because I\'m from Canada, doesn\'t mean that I like Rush!');
} else {
  console.log('WRONG ANSWER! I\'m from Canada!');
  alert('WRONG ANSWER! I\'m from Canada!');
}
