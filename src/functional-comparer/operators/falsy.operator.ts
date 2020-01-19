import { compareOperator } from '../types'

export function falsy<T, K extends keyof T>(propName: K): compareOperator<T> {
	return (t1, t2) => !t1[propName] && !t2[propName]
}
