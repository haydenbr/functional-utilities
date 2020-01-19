// this is for experimenting with api ergonomics without red squigglies
// Just for kind of tinkering with how I would expect to use the functions



// By default, compares everything 
createFullComparer(
	// ...operators
)

// only compares based on passed in operators
createComparer(
	// ...operators
)

// creates a comparer for a certain type that can be
// resued in other comparisons. Primary use case is for
// comparing dates of some sort.
createCompareOperator( // like this in ts: createCompareOperator<SomeType>(/* */)
	(d1, d2) => someKindOfDateComparison(d1, d2)
)

// how do we compare elements of the array?
createComparer(
	// this would be ideal
	compareOrderedElements('prop1', operator()),
	// this is easier to implement initially,
	// but deviates from how the rest of the things work
	compareOrderedElements('prop2', (e1, e2) => {/* do compary kinds of things */})
)
