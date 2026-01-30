// Topic of the Day: SetTimeout vs SetInterval

// Explanation: These are the timers of the web.

// setTimeout: Run once after X milliseconds.

// setInterval: Run repeatedly every X milliseconds.

console.log("Start");

// 1. Timeout (Delayed Action)
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

// 2. Interval (Repeating Action)
let count = 0;
const timerId = setInterval(() => {
    count++;
    console.log(`Tick: ${count}`);

    // Stop after 3 ticks
    if (count === 3) {
        clearInterval(timerId); // This stops the interval
        console.log("Timer Stopped");
    }
}, 1000); // Every 1 second