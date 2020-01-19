import { compareOperator } from '../types'
import { createCompareOperator } from './create-compare-operator'

export const compareLength = createCompareOperator<{ length: number }>(
	(t1, t2) => t1.length === t2.length
)
