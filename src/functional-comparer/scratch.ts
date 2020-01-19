// built in prop comparers:
/*
- compareLenient()
- compare()

- compareOrderedElements()
- compareUnorderedElements()

- falsy()
- nullish()
- truthy()
- ignore() for use with compareAll()
- // custom()
*/

// create

// what should be the default, if any?
// createComparer()

// createComparer(
// 	falsey('IsActive'),
// 	compare('Name'),
// 	custom('StartDate', (d1, d2) => dateCompareLibrary(d1, d2))
// )

// createComparer(
// 	compareAll() // default is compare()
// )

// createComparer(
// 	compareAll(truthy()),
// 	ignore('Name'),
// )

import {  } from './operators'
import { compareOperator } from './types'
import { createCompareOperator } from './operators/create-compare-operator'

export function createComparer<T>(
	...compareFunctions: compareOperator<T>[]
) {
	return function comparerFunction(t1: T, t2: T) {
		if (t1 === t2) {
			return true
		}

		for (let c of compareFunctions) {
			let itemsAreSame = c(t1, t2)
			if (!itemsAreSame) {
				return false
			}
		}

		return true
	}
}

interface User {
	name: string,
	id: number,
	tag: string
	createdOn: Date
}

let a: User = { name: 'bob', id: 1, tag: '@bobiscool', createdOn: new Date() }
let b: User = { name: 'bob', id: 1, tag: '@bobiscool', createdOn: new Date() }



function compare<T, K extends keyof T>(propName: K): compareOperator<T> {
	return (t1, t2) => t1[propName] === t2[propName]
}

function custom<T, K extends keyof T>(
	propName: K,
	customCompare: compareOperator<T[K]>
): compareOperator<T> {
	return (t1, t2) => customCompare(t1[propName], t2[propName])
}

const compareDates = createCompareOperator<Date>((d1, d2) => d1 === d2)

// this still doesn't understand that 'createdOn' is the property createdOn in interface,
// but it's close enough. So if I rename createdOn on the interface, the call to compareDates
// isn't updated.

// I wonder if it would be possible to implement this with a poorly-performing Proxy accessor
// but then somehow transform the build to access the property by string name instead.

// would it be possible to 'build' as accepting string, but export typings that allow for lambda access?
// would need someway of transforming that from e => e.createdOn to 'createdOn'

const compareUsers = createComparer<User>(
	compare('id'),
	custom('name', (id1, id2) => id1 === id2),
	compareDates('createdOn'),
)

compareUsers(a, b)
