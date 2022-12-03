var saveBtn = $(".saveBtn");
$(document).ready(function () {
  
  // update Current Day in JumboTron
  $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

});
// function to add color to each time block based on class
function updateTimeBlock() {

var currentTime = moment().hours()
console.log(currentTime);

// loops through each time block then adds class to indicate current color
  $('.time-block').each(function () {
    var blockTime = parseInt($(this).attr('id'));
    // console.log(this) checking if value was parsed correctly
    
    // if else statement that checks current blocktime against actual time from moments() then adds class which updates the color
    if (blockTime > currentTime) {
      $(this).addClass("future");
        } else if (blockTime === currentTime) {
          $(this).addClass("present");
          } else {
            $(this).addClass("past");
        }
      })
      
      // listens for a click on the button
      saveBtn.on("click", function() {

        // console.log(this); //save button
        var time = $(this).siblings(".hour").text();
        var description = $(this).siblings(".description").val();
    
        // saves key/value pair into local storage
        localStorage.setItem(time, description);
    });    

    
  }

updateTimeBlock();

// with jQuery, recalls the values in localstorage using the key to display in an HTML element - refreshing the page will not clear contents

$('#9 .description').val(localStorage.getItem('9AM'));
$('#10 .description').val(localStorage.getItem('10AM'));
$('#11 .description').val(localStorage.getItem('11AM'));
$('#12 .description').val(localStorage.getItem('12PM'));
$('#13 .description').val(localStorage.getItem('1PM'));
$('#14 .description').val(localStorage.getItem('2PM'));
$('#15 .description').val(localStorage.getItem('3PM'));
$('#16 .description').val(localStorage.getItem('4PM'));
$('#17 .description').val(localStorage.getItem('5PM'));





















// }});


