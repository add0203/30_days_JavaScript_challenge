// Day 13: Modules
// Tasks/Activities:
// Activity 1: Creating and Exporting Modules
//utility  is exporting module
import {
  multiply as mul,
  multiplySpread as multiplyWithMultiArgs,
} from "./utility.mjs";
console.log(mul(1, 2, 3));
console.log(multiplyWithMultiArgs(1, 2, 3, 4, 5, 6));
console.log(multiplyWithMultiArgs(1, 2, 3, 4));
// • Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
import { add } from "./utility.mjs";
console.log(add(1, 2, 3, 4));
// • Task 2. Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const objPerson = {
  name: "anand",
  course: "mca",
};

import { repObj } from "./utility.mjs";
repObj(objPerson);
// Activity 2: Named and Default Exports
// • Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
// Importing functions from mathUtils.js using named imports
import { add as addition, subtract, multiply, divide } from "./mathUtils.mjs";

console.log("Addition of 2 and 3:", addition(2, 3)); // Outputs: Addition of 2 and 3: 5
console.log("Subtraction of 5 and 2:", subtract(5, 2)); // Outputs: Subtraction of 5 and 2: 3
console.log("Multiplication of 4 and 3:", multiply(4, 3)); // Outputs: Multiplication of 4 and 3: 12

try {
  console.log("Division of 6 by 2:", divide(6, 2)); // Outputs: Division of 6 by 2: 3
  console.log("Division of 6 by 0:", divide(6, 0)); // Throws error
} catch (error) {
  console.error(error.message); // Outputs: Division by zero is not allowed.
}

// • Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

import sum from "./defaultExport.mjs";

console.log("sum is: " + sum(1, 2, 3, 4));
// Activity 3: Importing Entire Modules
// • Task 5. Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import { PIvalue, PIvalueDisplay } from "./mathUtils.mjs";

console.log("pi value : ", PIvalue);
console.log("methode used to print PI value : " + PIvalueDisplay(PIvalue));

// Activity 4: Using Third-Party Modules

import _ from "lodash";

let arr = [1, 2, 3, 4, 5, 6];

console.log(_.chunk(arr, 3)); // Outputs: [[1, 2, 3], [4, 5, 6]]
console.log(_.compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(_.concat(arr, 7, 8)); // [1, 2, 3, 4, 5, 6, 7, 8]

const object = { a: 1, b: 2 };

console.log(_.assign(object, { c: 3 })); // { a: 1, b: 2, c: 3 }
console.log(_.get(object, "a")); // 1
console.log(_.set(object, "d", 4)); // { a: 1, b: 2, c: 3, d: 4 }

console.log(_.camelCase("Foo Bar")); // 'fooBar'
console.log(_.capitalize("hello world")); // 'Hello world'
console.log(_.kebabCase("Hello World")); // 'hello-world'

const users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
];

console.log(_.filter(users, (o) => o.active)); // [{ 'user': 'barney', 'age': 36, 'active': true }]
console.log(_.map(users, "user")); // ['barney', 'fred']
console.log(_.reduce([1, 2, 3], (sum, n) => sum + n, 0)); // 6
// • Task 7:  Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.

import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Activity 5: Module Bundling (Optional)
// • Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
//infolder name web_pack_project
