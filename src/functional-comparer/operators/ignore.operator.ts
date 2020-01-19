import { compareOperator } from '../types'

export function ignore<T, K extends keyof T>(propName: K): compareOperator<T> {
	return (t1, t2) => true
}
