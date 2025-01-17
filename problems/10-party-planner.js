// Your code here
class PartyPlanner {
	constructor() {
		this.guestList = [];
	}

	addToGuestList = (name) => this.guestList.push(name);

	throwParty = () => {
		return this.guestList.length > 0 ? `Welcome to the party ${makeString.call(this)}` : "Gotta add people to the guest list";
	}
}

function makeString() {
	const result = [];
	this.guestList.forEach((element, index) => {
		if (index !== this.guestList.length - 1) {
			result.push(element + ' and')
		} else {
			result.push(element);
		}
	});

	return result.join(' ');
}

const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
