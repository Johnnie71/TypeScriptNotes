/*
Merging all definitions of and interface
*/

interface Cart {
	calculateTotal(): number;
}

interface Cart {
	x: number;
}

interface Cart {
	calculateTotal(option: { discountCode: number }): number;
}

let myCart: Cart = {
	x: 1,
	calculateTotal(options?: { discountCode: number }) {
		if (options && options.discountCode) {
			// apply discount
		}
		return 1;
	},
};

/*
 Merging namespaces
 */

namespace MyNamespace {
	export const x: number = 10;
	export interface SomeInterface {
		y: number;
	}
}

namespace MyNamespace {
	export const getX = () => x;
	export interface SomeInterface {
		x: number;
	}
}

MyNamespace.x;
MyNamespace.getX();

const someInterface: MyNamespace.SomeInterface = {
	x: 1,
	y: 2,
};

/*
Extending a function with some properties and methods using namespaces
 */

function someFunction() {
	return 10;
}

namespace someFunction {
	export const someProperty = 10;
}

someFunction.someProperty;
