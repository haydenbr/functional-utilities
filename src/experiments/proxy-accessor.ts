/*

This is a nice "reflective" way of accessing property names. It's good in both type
support and ergonomics, but the performance is pretty bad. Leaving this here for now
in case there's a performant way to use this in the future.

I wonder if it would be possible to implement this with a poorly-performing Proxy accessor
but then somehow transform the build to access the property by string name instead.

would it be possible to 'build' as accepting string, but export typings that allow for lambda access?
would need someway of transforming that from e => e.createdOn to 'createdOn'

Or perhaps we could cache the property name access to the poor performance only happens once.

*/

let bob = { Name: 'bob', id: 1, tag: '@bobiscool' }

var reflector = new Proxy({}, {
	get: function (target, prop) {
		return prop
	}
})

function access<T = any>(obj: T, accessor: (e: T) => any) {
  return accessor(reflector as any)
}

console.time('proxy')

access(bob, e => e.Name)
access(bob, e => e.id)
access(bob, e => e.tag)

console.timeEnd('proxy')
