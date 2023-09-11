function bindToAnArg(func, arg) {
  // Your code here
  return (...args) => {
    return func(arg, ...args);
  }
}

function add(num1, num2) {
  return num1 + num2;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
