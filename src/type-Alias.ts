/*
A type alias is used to create a new name for an existing type,
commoly used for complexed types.
 */

type Alias1 = string | string[] | null;
type Alias2 = { a: number } & { b: number };
type Alias3<T> = T[];

type Alias4 = {
	a: number;
	b: number;
};
