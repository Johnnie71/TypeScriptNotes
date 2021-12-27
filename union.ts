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
