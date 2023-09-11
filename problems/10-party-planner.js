// Your code here
class PartyPlanner {
	constructor() {
		this.guestList = [];
	}

	addToGuestList = (name) => this.guestList.push(name);

	throwParty = () => {
		return this.guestList.length > 0 ? `Welcome to the party ${makeString(this.guestList)}` : "Gotta add people to the guest list";
	}
}

function makeString (arr) {
	const result = [];
	arr.forEach((element, index) => {
		if (index !== arr.length - 1) {
			result.push(element + ' and')
		} else {
			result.push(element);
		}
	});

	return result.join(' ');
}
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
