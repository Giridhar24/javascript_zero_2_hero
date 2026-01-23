// Topic of the Day: Arrow Functions & this
// Explanation: In standard functions, the keyword this changes based on who called the function. 
// This is annoying in callbacks. 
// Arrow Functions do not have their own this. 
// They inherit this from the parent scope. 
// This makes them perfect for classes.

class Counter {
    constructor() {
        this.count = 0;
    }

    start() {
        // Problem: Standard function() defines its own 'this', 
        // which is usually 'window' or 'undefined' inside setInterval.
        
        // Fix: Use Arrow Function () => {}
        // It keeps 'this' pointing to the Counter object.
        setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
}

const c = new Counter();
c.start(); // Prints 1, 2, 3... every second