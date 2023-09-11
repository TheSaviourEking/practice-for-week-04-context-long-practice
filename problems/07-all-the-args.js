function allTheArgs(func, ...args) {
  // Your code here
  return (...moreArgs) => func(...args, ...moreArgs);
}

function sum(...nums) {
  return nums.reduce((acc, num) => acc + num);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
