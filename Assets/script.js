//This variable allows us to pull the current hour from moment.js
//H allows us to use military time

var now = parseInt(moment().format('H'));

//This function displays the current date on the top of the page
function displayTime() {
    $('#currentDay').text(moment().format('MMMM Do YYYY'));
};

setInterval(displayTime, 1000);
displayTime();

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

//save button saves time block inputs into local storage
$(`.saveBtn`).on("click", function (event){
    var timeBlockText = event.target.previousElementSibling.value;
    var timeBlockNumber = event.target.previousElementSibling.getAttribute('id');
    
    localStorage.setItem(timeBlockNumber, timeBlockText);
});

//This function pulls the saved inputs from local storage on page load
function fillTimeBlocks ()  {
    $(`#9`).val(localStorage.getItem('9'));
    $(`#10`).val(localStorage.getItem('10')); 
    $(`#11`).val(localStorage.getItem('11')); 
    $(`#12`).val(localStorage.getItem('12')); 
    $(`#13`).val(localStorage.getItem('13')); 
    $(`#14`).val(localStorage.getItem('14'));
    $(`#15`).val(localStorage.getItem('15'));
    $(`#16`).val(localStorage.getItem('16'));
    $(`#17`).val(localStorage.getItem('17'));   
}

fillTimeBlocks();