// map, compare,

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
createComparer()

createComparer(
	falsey('IsActive'),
	compare('Name'),
	custom('StartDate', (d1, d2) => dateCompareLibrary(d1, d2))
)

createComparer(
	compareAll() // default is compare()
)

createComparer(
	compareAll(truthy()),
	ignore('Name'),
	
)
