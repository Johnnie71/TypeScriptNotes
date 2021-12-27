/* Combining multiple types into one using bitwise and operator to
combine types */

interface A {
	a: number;
}

interface B {
	b: number;
}

interface C {
	c: number;
}

function x(obj: A & B & C) {
	return obj.a + obj.b + obj.c;
}
