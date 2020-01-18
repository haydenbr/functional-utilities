import { OnlyKeysOfT, compareOperator } from '../types'

export function createCompareOperator<P>(customCompare: compareOperator<P>) {
	return <
		T extends Record<K, P>,
		K extends OnlyKeysOfT<T, P>
	>(propName: K) => {
		return (t1: T, t2: T) => customCompare(t1[propName], t2[propName])
	}
}