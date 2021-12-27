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

/* 
function that takes in two objects and combines them returning
a third object that contains all the members of these objects.
*/

function combine<ObjA extends object, ObjB extends object>(
	objA: ObjA,
	objB: ObjB
): ObjA & ObjB {
	return { ...objA, ...objB };
}

const objA = { a: 1 };
const objB = { b: 2 };
const result = combine(objA, objB);
