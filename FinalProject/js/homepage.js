/*
HomeP
Create 3 divs with a class name of "counter". 
Each div will have an id "cups-counter", "steps-counter","pingpong-counter".

When the page loads up
  We are going to update counter every 30 seconds.

In order to update counters:
  Each div will have a set number to start set in html.
  Get the current value in each div.
  Increase the value by a certain number for each div.
  Cups-count will increase+2
  Steps-counter will increase+4 
  Pingpong-counter will increase+1

*/
function updateCounters() {
  // grab the current text values from divs
  
  var pongText = $('#pingpong').text();
  var stepText = $('#steps').text();

  // convert text values to numbers
  
  var pongNumber = parseInt(pongText, 10);
  var stepNumber = parseInt(stepText, 10);

  // calculate new values
  
  var newPongNumber = pongNumber + 1;
  var newStepNumber = stepNumber + 150;

  // update divs with new values
  
  $('#pingpong').text(newPongNumber);
  $('#steps').text(newStepNumber);
}

$(function() {
  setInterval(updateCounters, 10000);
});

function updateCups(argument) {
  // grab the current text values from coffee
  var cupText = $('#cups').text();
  // convert text values to numbers for coffee
  var cupNumber = parseInt(cupText, 10);
  // calculate new values
  var newCupNumber = cupNumber + 1;
  // update divs with new values
  $('#cups').text(newCupNumber);
}
$(function() {
  setInterval(updateCups, 15000);
});
