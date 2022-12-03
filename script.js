$(document).ready(function () {
  let secondCounts = () => {
    let currentDay = $("#currentDay");
    const timeOfDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDay.text(timeOfDay);
  };
  secondCounts();
  setInterval(() => {
    secondCounts();
  }, 1000);

});











// }});


