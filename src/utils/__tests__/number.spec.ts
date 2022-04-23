import { preciseNumbers } from '../Number'

describe('Number-Test', () => {
  it('preciseNumbers', () => {
    expect(preciseNumbers(0.1 + 0.2, 0)).toBe(0)
    expect(preciseNumbers(0.1 + 0.2, 1)).toBe(0.3)

    expect(preciseNumbers(3.3 * 333, 1)).toBe(1098.9)
    expect(preciseNumbers(9.99 * 93.2, 4)).toBe(931.068)

    expect(preciseNumbers(1.11 * 333.3333)).toBe(369.999963)
  })
})
