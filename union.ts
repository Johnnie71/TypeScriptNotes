/* 
We use union types to describe a value that can be one of
several types
*/

function someFn(myArgument: number | string | boolean) {
	if (typeof myArgument === "string") {
		let x = myArgument.toUpperCase();
	} else if (typeof myArgument === "number") {
		myArgument.toFixed();
	} else {
		myArgument;
	}
}

// Using interfaces with functions that have union types
interface Dog {
	bark(): void;
	walk(): void;
}

interface Cat {
	meow(): void;
	walk(): void;
}

function isDog(someObj: Dog | Cat): someObj is Dog {
	return (<Dog>someObj).bark !== undefined;
}

function callMyPet(pet: Dog | Cat) {
	pet.walk();
	if (isDog(pet)) {
		pet.bark();
	} else {
		pet.meow();
	}
}
