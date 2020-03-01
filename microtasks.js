// A PROMISE HANDLERS .THEN / .CATCH / .FINALLY ARE ALWAYS ASYNCHRONOUS. EVEN WHEN A PROMISE
// RESOLVES IMMEDIATELY, THE LINES BELOW THE .THEN / .CATCH / .FINALLY HANDLERS ARE EXECUTED
// BEFORE THE HANDLERS. HERE'S AN EXAMPLE OF THIS FACT

let promise = new Promise((resolve, reject) => {
  resolve(); //resolves this promise asap
});

promise.then(result => console.log("immediately resolved promise"));

console.log("I will be printed before you");
