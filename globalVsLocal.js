// Topic of the Day: Variable Scope (Global vs Local)
// Explanation: Scope determines where your variables are "visible."
// Global Scope: Defined outside any function. Visible everywhere.
// Local (Block) Scope: Defined inside a function or block { }. Not visible outside.
// Note: Using let or const respects block scope. var (old JS) does not, which caused many bugs.


let globalVar = "I am visible everywhere";

function testScope() {
    let localVar = "I am hidden inside the function";
    
    console.log(globalVar); // Works!
    console.log(localVar);  // Works!
}

testScope();

console.log(globalVar); // Works!

// console.log(localVar); 
// ERROR: Uncaught ReferenceError: localVar is not defined
// The code crashes here because 'localVar' died when the function finished.