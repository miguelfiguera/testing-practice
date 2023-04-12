import {obj,calculator, caesar,capitalize,reverseString} from './functions.js'


test('capitalize strings',()=>{
    expect(capitalize('this is a good day to die')).toBe('This is a good day to die')
})


test('Reverse the provided String',()=>{
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('MortalKombat')).not.toBe('tabmoklatrom');
})


test('caculator tests',()=>{
    expect(calculator.sum(1,1)).toBe(2)
    expect(calculator.substract(1,1)).toBe(0)
    expect(calculator.multiply(8,7)).toBe(56)
    expect(calculator.divide(4,2)).toBe(2)
})


test('cipher',()=>{
    expect(caesar('a',1)).toBe('b')
    expect(caesar('a',2)).toBe('c')
})

