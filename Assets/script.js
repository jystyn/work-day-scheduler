//This variable allows us to pull the current hour from moment.js
//H allows us to use military time
var now = parseInt(moment().format('H'));

//This color codes the time blocks based on time of day
$.each($(`:input`), function () {
    var time = parseInt($(this).attr('id'));
    if (time === now) {
        $(this).addClass('present');
    } else if (time < now) {
        $(this).addClass('past');
    } else if (time > now) {
        $(this).addClass('future');
    }
})

//This function displays the current date on the top of the page
function displayTime() {
    $('#currentDay').text(moment().format('MMMM Do YYYY'));
};

setInterval(displayTime, 1000);
displayTime();