// THERE ARE FIVE(5) STATIC METHODS IN THE PROMISE CLASS. WE WILL COVER THEM ALL IN THIS FILE

// PROMISE.ALL()

// PROMISE.ALL() METHOD USUALLY TAKES AN ARRAY OF PROMISES AND RETURNS A PROMISE. THE RETURNED
// PROMISE RESOLVES WHEN ALL THE PROMISES(ELEMENT OF PROMISE ARRAY) ARE SETTLED. WE USE
// PROMISE.ALL() WHEN WE WANT TO RUN ALL THE PROMISES AT THE SAME TIME. LIKE, WE CAN DOWNLOAD
// SOME RESOURCES FROM SOME URLS AND SHOW THEM WHEN ALL RESOURCES ARE DOWNLOADED

//INITIALIZING SOME PROMISES THOSE RESOLVES AFTER SOME TIME
// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 3000);
// });
// const promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(2), 2000);
// });
// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(3), 1000);
// });

// USING PROMISE.ALL() METHOD

// Promise.all([promiseOne, promiseTwo, promiseThree]).then(
//   result => console.log(result) //[1,2,3]
// );

// NOTE THAT THE SEQUENCE OF RESULT IS DEPEND ON THE ONDER OF PROMISES IN THE SOURCE. LOOK,
// THOUGH THE FIRST PROMISE TAKES LONGER TO RESOLVE THAN OTHER TWO PROMISES, IT WILL BE THE
// FIRST IN THE ORDER OF RESULT

// REAL LIFE EXAMPLE OF PROMISE.ALL()

const fetch = require("node-fetch");

const urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig"
];

const request = urls.map(url => {
  fetch(url);
});

Promise.all(request).then(data => {
  data.forEach(data => {
    console.log(data.url, data.status);
  });
});
