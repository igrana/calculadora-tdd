import { describe, it, expect  } from "vitest"
import { add, sub, mul, div, sqrt } from '../src/calc.js'

describe('calculadora básica', () => {
    it('suma', () => {
        expect(add(2, 3)).toBe(5)
        expect(add(-1, 1)).toBe(0)
        expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10) //Cuidado con flotantes
    })

    it('resta', () => {
        expect(sub(5, 2)).toBe(3)
        expect(sub(2, 5)).toBe(-3)
    })

    it('multiplicación', () => {
        expect(mul(3, 4)).toBe(12)
        expect(mul(1.5, 2)).toBeCloseTo(3.0, 10)
    })
    
    it('división', () => {
        expect(div(10, 2)).toBe(5)
        expect(() => div(1, 0)).toThrow(RangeError)
    })

    it('raíz cuadrada', () => {
        expect(sqrt(9)).toBe(3)
        expect(sqrt(2)).toBeCloseTo(Math.SQRT2, 10)
        expect(() => sqrt(-1)).toThrow(RangeError)
    })
})