import { compareOperator } from '../types'
import { isNullish } from '../util'

export function nullish<T, K extends keyof T>(propName: K): compareOperator<T> {
	return (t1, t2) => isNullish(t1[propName]) && isNullish(t2[propName])
}
