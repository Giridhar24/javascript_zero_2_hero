// Topic of the Day: call, apply, and bind

// Explanation: We learned that this can be tricky. These three methods allow you to manually set what this points to.

// call: Run function now, pass args one by one.

// apply: Run function now, pass args as an Array.

// bind: Don't run yet. Return a new function with this permanently fixed.

const person = {
    name: "Alice"
};

function introduce(greeting, punctuation) {
    console.log(`${greeting}, I am ${this.name}${punctuation}`);
}

// 1. Call (Comma separated args)
introduce.call(person, "Hello", "!"); 
// Output: Hello, I am Alice!

// 2. Apply (Array of args)
introduce.apply(person, ["Hi", "."]); 
// Output: Hi, I am Alice.

// 3. Bind (Returns a new function)
const talkAsAlice = introduce.bind(person);
talkAsAlice("Yo", "!!"); 
// Output: Yo, I am Alice!!