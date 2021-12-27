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
