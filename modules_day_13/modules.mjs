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
// • Task 6: Install a third-party module (e.g., Iodash ) using npm. Import and use a function from this module in a script.
import _ from "iodash";

let arr = [1, 2, 3, 4, 5, 6];

console.log(chunk(arr, 3));
// • Task 7:  Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.
// Activity 5: Module Bundling (Optional)
// • Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
