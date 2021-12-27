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

interface Dog {
	bark(): void;
	walk(): void;
}

interface Cat {
	meow(): void;
	walk(): void;
}

function callMyPet(pet: Dog | Cat) {
	pet.walk();
	if ((<Dog>pet).bark) {
		(<Dog>pet).bark();
	} else {
		(<Cat>pet).meow();
	}
}
