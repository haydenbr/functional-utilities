import { createCompareOperator } from './create-compare-operator'

// export function compareOrderedElements<T, K extends keyof T>(propName: K): compareOperator<T> {
// 	return (t1, t2) => t1[propName] === t2[propName]
// }

// export function compareOrderedElements<T = any>() {
// 	return createCompareOperator<T[]>((x1, x2) => {
// 		if (x1.length !== x2.length) {
// 			return false
// 		}

// 		return true
// 	})
// }

// export const compareOrderedElements = createCompareOperator<any[]>(
// 	(x1, x2) => {

// 	}
// )

// compareOrderedElements<{ name: string }>()
