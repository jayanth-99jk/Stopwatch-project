let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;

let showtime = document.getElementById("showtime");

function stopwatch() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    showtime.innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatMilliseconds(milliseconds);
}

function watchstart() {
    if (timer === undefined) {
        timer = setInterval(stopwatch, 10); // Change the interval to 10 milliseconds
    }
}

function watchstop() {
    if (timer !== undefined) {
        clearInterval(timer);
        timer = undefined;
    }
}

function watchreset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    showtime.innerHTML = "00:00:00:000";
    watchstop();
}

function formatMilliseconds(ms) {
    if (ms < 10) {
        return "00" + ms;
    } else if (ms < 100) {
        return "0" + ms;
    } else {
        return ms;
    }
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
