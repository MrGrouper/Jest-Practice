const {capitalize, reverseString, calculator, caesarCipher, analyzeArray}  = require("./script")

//Test capitalize Func
test('capitalizes first letter of string', () => {
    expect(capitalize('cat')).toMatch('Cat');
  });

test('already capitalized string returns capitalized string',()=>{
    expect(capitalize('Banana')).toMatch('Banana')
})

test('input not a string returns error',()=>{
    expect(capitalize(78)).toThrow(Error)
})

//test reverseString Func
test('returns reverse of string', () => {
    expect(reverseString('cat')).toMatch('tac');
  });

test('input not a string returns error',()=>{
    expect(capitalize(89)).toThrow(Error)
})

//test calculator Func
test('add 2+6 equals 8',()=>{
    expect(calculator('add', 2,6)).toBe(8)
});

test('multiply 4*5 equals 20',()=>{
    expect(calculator('multiply', 4,5)).toBe(20)
});

test('subtract 88-17 equals 71',()=>{
    expect(calculator('subtract', 88,17)).toBe(71)
});

test('subtract 17-88 equals -71',()=>{
    expect(calculator('subtract', 17,88)).toBe(-71)
});

test('divide 48/4 equals 12',()=>{
    expect(calculator('divide', 48,4)).toBe(12)
});

test('divide 48/4 equals 12',()=>{
    expect(calculator('divide', 48,4)).toBe(12)
});
test('incorrect parameter throws error',()=>{
    expect(calculator('catdog', 6,4)).toThrow(Error)
});

test('correctly shift string',()=>{
    expect(caesarCipher('abcde', 2)).toMatch('cdefg')
});

test('correctly analyzes array',()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
});



