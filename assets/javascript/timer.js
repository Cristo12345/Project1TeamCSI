var mins = 1;
var secs = mins * 60;
var timeout;

function countdown() {
    timeout = setTimeout('Decrement()', 1000);
}
// THE MAGIC BEGIN HERE
var colors = ["red", "green", "blue", "cyan", "magenta", "yellow", "white"];
var currentColorIndex = 0;

function Decrement() {
    if (document.getElementById) {
        minutes = document.getElementById("minutes");
        seconds = document.getElementById("seconds");
        // if less than a minute remaining
        if (seconds < 59) {
            seconds.value = secs;
        } else {
            minutes.style.color = colors[currentColorIndex];
            seconds.style.color = colors[currentColorIndex];
            minutes.value = getminutes();
            seconds.value = getseconds();
            if (++currentColorIndex > colors.length) currentColorIndex = 0;
        }
        secs--;
        if (secs < 0) {
            clearTimeout(timeout);
            $("#confirm").html(
                `Better luck next time. Your score is 0 points.`
            );
            return $("#timer").html(`<h2 style='color:white'><strong>Time's up!</strong></h2>`);
        }
        countdown();
    }
}

function getminutes() {
    // minutes is seconds divided by 60, rounded down
    mins = Math.floor(secs / 60);
    return ("0" + mins).substr(-2);
}

function getseconds() {
    // take mins remaining (as seconds) away from total seconds remaining
    return ("0" + (secs - Math.round(mins * 60))).substr(-2);
}

function stop() {
    clearTimeout(timeout);
}