import { thousandSeparator } from '../String'

describe('String-Test', () => {
  it('thousandSeparator', () => {
    expect(thousandSeparator(123456789)).toBe('123,456,789')
    expect(thousandSeparator(123)).toBe('123')
    expect(thousandSeparator(1456789123459)).toBe('1,456,789,123,459')
  })
})
