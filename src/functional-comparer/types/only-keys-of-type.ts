// only keys of TObject that map to values of Type
export type OnlyKeysOfType<TObject, Type> = {
	[K in keyof TObject]: TObject[K] extends Type ? K : never
}[keyof TObject]
