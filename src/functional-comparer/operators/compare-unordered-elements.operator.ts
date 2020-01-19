import { compareOperator } from '../types'

export function compareUnorderedElements<T, K extends keyof T>(propName: K): compareOperator<T> {
	return (t1, t2) => t1[propName] === t2[propName]
}
