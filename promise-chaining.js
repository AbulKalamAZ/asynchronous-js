// HERE, WE WILL BE DICUSSING WHAT PROMISE CHAINING IS AND HOW IT WORKS

// OUR IDEA IS TO CREATE A PROMISE AND WHENEVER IT RESOLVES THE PARAMETER OF RESOLVE FUNCTION
// WILL BE PASSED INTO THEN HANDLER. IF WE HAVE MULTIPLE THEN HANDLER ONE AFTER ANOTHER. THERE'S
// NO PROBLEM WITH THIS AND IS KNOWN AS 'PROMISE CHAINING' . LET'S SEE AN EXAMPLE

// const promise = new Promise((resolve, reject) => {
//   setTimeout(resolve(10), 1000);
// });

// promise
//   .then(result => {
//     console.log(result); //print 10 from resolve
//     return result * 2;
//   })
//   .then(result => {
//     console.log(result); //print 20 from prev then handler
//     return result * 2;
//   })
//   .then(result => {
//     console.log(result); //print 40 from prev then handler
//     return result * 2;
//   });

// THE WHOLE THING IS WORKING BECAUSE A CALL TO 'PROMISE.THEN()' RETURNS A PROMISE. AND IF WE RETURN ANY VALUE FROM
// THE FIRST THEN() HANDLER, THAT VALUE WILL BE PASSED AS A PARAMETER OF FULLFILLED PROMSIE(WHICH IS RETURNED FROM)
// FIRST THEN() HANDLER

//NOW WE WILL DISCUSS ABOUT A COMMON MISTAKE MADE BY PEOPLE WHO ARE NEW AT THIS TOPIC. LET'S SEE AND EXAMPLE

const promise = new Promise((resolve, reject) => {
  setTimeout(resolve(100), 2000);
});

promise.then(result => {
  console.log(result); //prints 100 on the console
  return result * 2;
});

promise.then(result => {
  console.log(result); //prints 100 but people get confused with 200
  return result * 2;
});

promise.then(result => {
  console.log(result); //prints 100 but people get confused with 400
  return result * 2;
});
