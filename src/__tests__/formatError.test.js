import {formatError} from "../helpers/formatError";


test('Format error from error object', () => {
    expect(formatError({message: "aaa"})).toBe('aaa')
})

test('Ha nem objektumot adunk át', () => {
    expect(formatError("string")).toBe('Váratlan hiba történt')
})

test('Ha undefinied', () => {
    expect(formatError(undefined)).toBe('Váratlan hiba történt')
})