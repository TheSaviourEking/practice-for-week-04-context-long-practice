// Your code here
let Calculator = require('./02-calculator');

class FancyCalculator extends Calculator {
	constructor() {
		super();
	}

	setTotal = (newTotal) => this.total = newTotal;

	modulo = (num) => this.total %= num;

	squared = () => this.total * this.total;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
