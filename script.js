/**
*  @project   Guess My Number
*  @author    Jamshid Elmi
*  @created   2022-07-10 12:53:35
*  @modified  2022-07-10 12:53:35
*  @tutorial  https://www.youtube.com/c/codingplay
*  @demo      https://JamshidElmi.github.io/Guess-My-Number-JS
*/
'use strict';

const setElementText = function (selector,value) {
  document.querySelector(selector).textContent = value;
} 
const getElementText = function (selector) {
  return document.querySelector(selector).textContent;
}; 
const getElementValue = function (selector) {
  return document.querySelector(selector).value;
};
let secritNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
// setElementText('.number', secritNumber);

// again btn click event
document.querySelector('.again').addEventListener("click", function() {
  document.querySelector('body').style.background = '#222';
  setElementText('.message', 'Start guessing...');
  score = 20;
  setElementText('.score', score);
  secritNumber = Math.floor(Math.random() * 20) + 1;
  setElementText('.number', "?");
});


// check btn click event
document.querySelector('.check').addEventListener("click", function() {
 
  let guess = parseInt(getElementValue('.guess'));
  // input is not null
  if (guess) {
    // input is wrong number 
    if (guess !== secritNumber) {
      guess > secritNumber
        ? setElementText('.message', 'Too High!')
        : setElementText('.message', 'Too Low!');
      score--;
      setElementText('.score', score);
    }
    // input is correct
    else if (guess === secritNumber) {
      setElementText('.message', 'Wow, You Won!');
      setElementText('.number', secritNumber);

      document.querySelector('body').style.background = 'green';
      if (parseInt(getElementText('.highscore')) < score)
        setElementText('.highscore', score);
    }
  }
});   
