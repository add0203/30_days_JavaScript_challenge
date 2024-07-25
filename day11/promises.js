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

//call promise
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

// call Promise
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
// Creating a promise chain in JavaScript allows you to handle asynchronous operations in a sequence. Promises are a cleaner alternative to deeply nested callbacks, often referred to as "callback hell."
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
function firstAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("First operation completed");
      resolve("Data from first operation");
    }, 1000);
  });
}

function secondAsyncOperation(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Second operation completed with data:", data);
      resolve("Data from second operation");
    }, 1000);
  });
}

function thirdAsyncOperation(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Third operation completed with data:", data);
      resolve("Data from third operation");
    }, 1000);
  });
}

// Chaining the promises
firstAsyncOperation()
  .then((data) => {
    return secondAsyncOperation(data);
  })
  .then((data) => {
    return thirdAsyncOperation(data);
  })
  .then((data) => {
    console.log("All operations completed with data:", data);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

// Activity 3: Using Async/Await
// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

function task4Promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("my promise for task 4 is resolved");
    }, 2000);
  });
}
const task4AsyncFunction = async () => {
  try {
    const task4PromisResolved = await task4Promise();
    console.log(task4PromisResolved);
  } catch (error) {
    console.log(error);
  }
};

// task4AsyncFunction();
// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
function task5Promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("promise of task 4 is rejected"));
    }, 5000);
  });
}

const task5AsyncFunction = async () => {
  try {
    const task5PromiseResolved = await task5Promise();
    console.log(task5PromiseResolved);
  } catch (error) {
    console.log(`Error : ${error.message}`);
  }
};

task5AsyncFunction();
// Activity 4: Fetching Data from an API
// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
console.log("task 6");
const fetchFunction = async () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      if (!res.ok) {
        console.log("no response found");
      }
      return res.json();
    })
    .then((data) => {
      console.log(`Data : ${data}`);
    })
    .catch((error) => {
      console.error(`Error : ${error.message}`);
    });
};
fetchFunction();
// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
// Activity 5: Concurrent Promises
// • Task 8: Use Promise. all to wait for multiple promises to resolve and then log all their values.
// • Task 9: Use Promise. race to log the value of the first promise that resolves among multiple promises.
