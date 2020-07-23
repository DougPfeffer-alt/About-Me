'use strict';

// var answerOne = confirm('Are you ready to rumble?');

// console.log(answerOne);

// if (answerOne === true) {
  // console.log('let\'s get ready to rumble');

// } else {
  // console.log('Okay. Another time then');
// }

var myBool = true;
var anotherBool = false;
var thirdBool = true;

if (myBool && thirdBool) {
  console.log('myBool and thirdBool are true');

}

else if (myBool || anotherBool) {
  console.log('myBool or anotherBool is true');

}

else if (thirdBool) {
  console.log('thirdBool is true');

}