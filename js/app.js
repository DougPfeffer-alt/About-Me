'use strict';

var name = prompt('What is your name?');
console.log('Hello, welcome to my page,', name);
alert('Hello! Welcome to my page, ' + name + '.');

var answer1 = confirm('Am I from a foreign country?');
if (answer1 === true) {
  console.log('that\'s right, I\'m from Canada!');
alert('that\s right, I\'m from Canada!');
} else {
  console.log('Nope, you ungrateful colonists, I\'m from Canada!');
alert('Nope, you ungrateful colonists, I\'m from Canada!');
}

