// HERE, WE WILL BE DICUSSING WHAT PROMISE CHAINING IS AND HOW IT WORKS

// OUR IDEA IS TO CREATE A PROMISE AND WHENEVER IT RESOLVES THE PARAMETER OF RESOLVE FUNCTION
// WILL BE PASSED INTO THEN HANDLER. IF WE HAVE MULTIPLE THEN HANDLER ONE AFTER ANOTHER. THERE'S
// NO PROBLEM WITH THIS AND IS KNOWN AS 'PROMISE CHAINING' . LET'S SEE AN EXAMPLE

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

promiseOne
  .then(result => {
    console.log(result); //print 10 from resolve
    return result * 2;
  })
  .then(result => {
    console.log(result); //print 20 from prev then handler
    return result * 2;
  })
  .then(result => {
    console.log(result); //print 40 from prev then handler
    return result * 2;
  });

// THE WHOLE THING IS WORKING BECAUSE A CALL TO 'PROMISE.THEN()' RETURNS A PROMISE. AND IF WE RETURN ANY VALUE FROM
// THE FIRST THEN() HANDLER, THAT VALUE WILL BE PASSED AS A PARAMETER OF FULLFILLED PROMSIE(WHICH IS RETURNED FROM)
// FIRST THEN() HANDLER

//NOW WE WILL DISCUSS ABOUT A COMMON MISTAKE MADE BY PEOPLE WHO ARE NEW AT THIS TOPIC. LET'S SEE AND EXAMPLE

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
  }, 2000);
});

promiseTwo.then(result => {
  console.log(result); //prints 100 on the console
  return result * 2;
});

promiseTwo.then(result => {
  console.log(result); //prints 100 but people get confused with 200
  return result * 2;
});

promiseTwo.then(result => {
  console.log(result); //prints 100 but people get confused with 400
  return result * 2;
});

// HERE ALL THEN() HANDLER IS CONNECTED TO ONE SINGLE PROMISE. SO ALL THEN() HANDLER WILL GET THE SAME VALUE THAT IS
// 100. IN REAL WORLD EXAMPLE, WE RARELY HAVE MULTIPLE THEN() METHOD TO SINGLE PROMISE. CHAINING IS USED MUCH MORE

// INDISE A THEN() HANDLER, A PROMISE CAN BE CREATED AND RETURNED. IN THAT CASE, THE NEXT THEN() WILL BE WAITING
// UNTILL THIS PROMSIE IS SETTLED. LET'S HAVE AN EXAMPLE

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

promiseThree
  .then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 2);
      }, 2000);
    });
  })
  .then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 2);
      }, 3000);
    });
  })
  .then(result => console.log(result));

// NOW WE'LL LOOK AT A REAL LIFE EXAMPLE. IN FRONTEND PROMISES ARE USED IN CASE OF NETWORK
// REQUEST. bELOW, WE'LL MAKE A REQUEST ON A REMOTE SERVER TO GET SOME DATA WITH.FETCH METHOD

const fetch = require("node-fetch");
fetch("sample.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data.length);
  });

//NOW WE WILL BE FETCHING SOME DATA FROM GITHUB WITH STATIC USERNAME

const username = "AbulKalamAZ";

//fetching to the github api

fetch(`https://api.github.com/users/${username}`)
  .then(response => {
    return response.json();
  })
  .then(githubUser => {
    console.log(githubUser.avatar_url);
  });

const promiseFour = new Promise((resolve, reject) => {
  throw new Error("An error occured unexpetedly!");
}).catch(err => console.log(err));

const promiseFive = new Promise((resolve, reject) => {
  throw new Error("Willingly thrown error!");
})
  .catch(err => {
    console.log("err is handled with care");
    return 100;
  })
  .then(result => {
    console.log(result, "then after error handling");
  });

// ERROR HANDLING TASK

const promsieSix = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 2000);
}).catch(err => console.log(err));

function foo(num) {
  return num * 100;
}

try {
  foo(ASD);
} catch (err) {
  console.log(err.message);
}
