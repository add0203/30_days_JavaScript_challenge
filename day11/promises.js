// Day 11: Promises and Async/Await
// Tasks/Activities:
// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation (e.g., network request, timer)
  let success;
  setTimeout(() => {
    success = true;
  }, 20000);

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});

myPromise
  .then((message) => {
    console.log(message); // "Operation was successful!"
  })
  .catch((error) => {
    console.error(error); // "Operation failed."
  })
  .finally(() => {
    console.log("Promise is settled, either fulfilled or rejected.");
  });
// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using . catch() .

const myPromise2 = new Promise((resolve, reject) => {
  let success2;

  setTimeout(() => {
    success2 = true;
  }, 2000);
});

myPromise2
  .then((message) => {
    console.log(message); // "Operation was successful!"
  })
  .catch((error) => {
    console.error(error); // "Operation failed."
  })
  .finally(() => {
    console.log("Promise is settled, either fulfilled or rejected.");
  });

// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

// Activity 3: Using Async/Await
// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
// Activity 4: Fetching Data from an API
// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
// Activity 5: Concurrent Promises
// • Task 8: Use Promise. all to wait for multiple promises to resolve and then log all their values.
// • Task 9: Use Promise. race to log the value of the first promise that resolves among multiple promises.
