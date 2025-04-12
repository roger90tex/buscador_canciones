import { sumArray, countWords, findMax,isDivisible } from "../function";

describe('sumArray', ()=> {
    test('con números positivos', () => {
        expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
    });
    test('con números negativos', () => {
        expect(sumArray([-1, -2, -3, -4, -5])).toBe(-15);
    });
    test ('con arreglo vacío', () => {
        expect(sumArray([])).toBe(0);
    });
    test ('con un solo elemento', () => {
        expect(sumArray([5])).toBe(5);
    });
    test ('con números mixtos', () => {
        expect(sumArray([-1, 2, -3, 4, -5])).toBe(-3);
    });
});

describe('countWords', () => {
    test('con texto normal', () => {
        expect(countWords('Hola mundo')).toBe(2);
    });
    test('con texto vacío', () => {
        expect(countWords('')).toBe(0);
    });
    test('con solo espacios', () => {
        expect(countWords('     ')).toBe(0);
    });
    test('con texto con múltiples espacios', () => {
        expect(countWords('Hola     mundo')).toBe(2);
    });
    test('con texto con puntuación', () => {
        expect(countWords('Hola, mundo!')).toBe(2);
    });
});

describe('findMax', () => {
    test('con números positivos', () => {
        expect(findMax([1, 2, 3, 4, 5])).toBe(5);
    });
    test('con números negativos', () => {
        expect(findMax([-1, -2, -3, -4, -5])).toBe(-1);
    });
    test('con arreglo vacío', () => {
        expect(findMax([])).toBe(null);
    });
    test('con un solo elemento', () => {
        expect(findMax([5])).toBe(5);
    });
    test('con números mixtos', () => {
        expect(findMax([-1, 2, -3, 4, -5])).toBe(4);
    });
});

describe('isDivisible', () => {
    test('divisible entre 2', () => {
        expect(isDivisible(4, 2)).toBe(true);
    });
    test('no divisible entre 2', () => {
        expect(isDivisible(5, 2)).toBe(false);
    });
    test('divisible entre 0', () => {
        expect(isDivisible(5, 0)).toBe('No se puede dividir entre cero');
    });
    test('división de cero', () => {
        expect(isDivisible(0, 5)).toBe(true);
    });
    test('número negativo divisible', () => {
        expect(isDivisible(-4, -2)).toBe(true);
    });
});

