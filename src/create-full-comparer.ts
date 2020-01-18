import { compareOperator } from './types'

export function createFullComparer<T>(
	...operators: compareOperator<T>[]
) {
	return function comparerFunction(t1: T, t2: T) {
		if (t1 === t2) {
			return true
		}

		for (let c of operators) {
			let itemsAreSame = c(t1, t2)
			if (!itemsAreSame) {
				return false
			}
		}

		return true
	}
}
