import { compareOperator } from './types'

/*
	perhaps the functions and property names passed in create a map of {prop: comparer}
	the comparer would use this map to get the comparer for each property
	and the comparer is responsible for accessing the approriate members of the objects
	being compared.

	This is different from the current implementation. Right now, operators have a closure
	to the prop name so the comparer just calls the operator with the full object and the
	operator itself worries about picking out the property and doing whatever necessary
	comparison.

	In this alternative, the comparer would look up the operator by keyname and either
	call the operator with only the property value to be compared or else do a straight
	`===` compare if no operator exists for the given key name.

	As of now, there would need to be some concept of looping through the operators and
	tracking 'visitied' properties, and then looping through the rest with a basic
	comparison. I don't think this is possible for now, so I will probabl
*/

export function createFullComparer<T>(
	...operators: compareOperator<T>[]
) {
	// return function comparerFunction(t1: T, t2: T) {
	// 	if (t1 === t2) {
	// 		return true
	// 	}

	// 	for (let c of operators) {
	// 		let itemsAreSame = c(t1, t2)
	// 		if (!itemsAreSame) {
	// 			return false
	// 		}
	// 	}

	// 	return true
	// }
}
