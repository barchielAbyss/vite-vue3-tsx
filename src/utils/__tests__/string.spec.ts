import { thousandSeparator, reverseCase } from '../String'

describe('String-Test', () => {
  it('thousandSeparator', () => {
    expect(thousandSeparator(123456789)).toBe('123,456,789')
    expect(thousandSeparator(123)).toBe('123')
    expect(thousandSeparator(1456789123459)).toBe('1,456,789,123,459')
  })

  it('reverseCase', () => {
    expect(reverseCase('')).toBe('')
    expect(reverseCase('Hello World')).toBe('hELLO wORLD')
    expect(reverseCase('4321}">DAS*&738ð')).toBe('4321}">das*&738ð')
    expect(reverseCase('ï¼ï¼*&*â¦â¦%Â¥%æ­¤æï¼ï¼#ðð¶eeA')).toBe('ï¼ï¼*&*â¦â¦%Â¥%æ­¤æï¼ï¼#ðð¶EEa')
  })
})
