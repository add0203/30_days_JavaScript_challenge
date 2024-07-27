//constants

export const PIvalue = 3.14;

//functions

export const PIvalueDisplay = (value) => {
  return value;
};

export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("Division by zero is not allowed.");
  }
};
