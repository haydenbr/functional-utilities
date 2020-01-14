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



export function createComparer<T>(
	...compareFunctions: compareFunction<T>[]
) {
	return function comparerFunction(t1: T, t2: T) {
		if (t1 === t2) {
			return true
		}

		let itemsAreSame = true

		for (let c of compareFunctions) {
			itemsAreSame = itemsAreSame && c(t1, t2)
			if (!itemsAreSame) {
				break;
			}
		}
		return itemsAreSame
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

type OnlyKeysOfT<T1, T2> = {
	[K in keyof T1]: T1[K] extends T2 ? K : never
}[keyof T1]

export type compareFunction<T> = (t1: T, t2: T) => boolean

function createCompareFunctionCreator<P>(customCompare: compareFunction<P>) {
	return <
		T extends Record<K, P>,
		K extends OnlyKeysOfT<T, P>
	>(propName: K) => {
		return (t1: T, t2: T) => customCompare(t1[propName], t2[propName])
	}
}

function compare<T, K extends keyof T>(propName: K): compareFunction<T> {
	return (t1, t2) => t1[propName] === t2[propName]
}

function custom<T, K extends keyof T>(
	propName: K,
	customCompare: compareFunction<T[K]>
): compareFunction<T> {
	return (t1, t2) => customCompare(t1[propName], t2[propName])
}

const compareDates = createCompareFunctionCreator<Date>((d1, d2) => d1 === d2)

// this still doesn't understand that 'createdOn' is the property createdOn in interface,
// but it's close enough. So if I rename createdOn on the interface, the call to compareDates
// isn't updated.

// I wonder if it would be possible to implement this with a poorly-performing Proxy accessor
// but then somehow transform the build to access the property by string name instead.

// would it be possible to 'build' as accepting string, but export typings that allow for lambda access?
// would need someway of transforming that from e => e.createdOn to 'createdOn'

let compareUsers = createComparer<User>(
	compare('id'),
	custom('name', (id1, id2) => id1 === id2),
	compareDates('createdOn')
)
compareUsers(a, b)
