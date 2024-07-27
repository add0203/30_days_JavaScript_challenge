function sum(...args) {
  let sum = args.reduce((acc, num) => acc + num);
  return sum;
}

export default sum;
