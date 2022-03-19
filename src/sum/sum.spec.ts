import { sum } from './sum';

describe('sum function', () => {
    it('should test sum of two numbers', () => {
        const sut = sum(1, 2);

        expect(sut).toBe(3)
    })
})