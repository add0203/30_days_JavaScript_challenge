export function multiply(a, b, c) {
  return a * b * c;
}

export function multiplySpread(...args) {
  let mul = args.reduce((acc, num) => acc + num);
  return mul;
}

export const add = (...args) => {
  let add = args.reduce((acc, num) => acc + num);
  return add;
};

export const repObj = (obj) => {
  process.stdout.write(`Person Name : ${obj.name}`);
  console.log();
  process.stdout.write(`Person Course: ${obj.course}`);
};
