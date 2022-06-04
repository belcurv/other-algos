const { topTwoSalaries } = require('./index')

describe('topTwoSalaries', () => {
  it('should return [9, 8] from [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
    const salaries = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const expected = [9, 8]
    const actual = topTwoSalaries(salaries)
    expect(actual).toEqual(expected)
  })

  it('should return [666, 222] from [1, 5, 222, 34, 66, 2, 90, 666]', () => {
    const salaries = [1, 5, 222, 34, 66, 2, 90, 666]
    const expected = [666, 222]
    const actual = topTwoSalaries(salaries)
    expect(actual).toEqual(expected)
  })

  it('should return [666, 222] from [666, 5, 222]', () => {
    const salaries = [666, 5, 222]
    const expected = [666, 222]
    const actual = topTwoSalaries(salaries)
    expect(actual).toEqual(expected)
  })

  it('should return [2, 1] from [1, 2, 2]', () => {
    const salaries = [1, 2, 2]
    const expected = [2, 1]
    const actual = topTwoSalaries(salaries)
    expect(actual).toEqual(expected)
  })

  it('should return [1] from [1]', () => {
    const salaries = [1]
    const actual = topTwoSalaries(salaries)
    expect(actual).toEqual([1])
  })

  it('should return [] from null/undefined', () => {
    expect(topTwoSalaries()).toEqual([])
    expect(topTwoSalaries(null)).toEqual([])
  })

  it('should return [666] from [666, 666, 666, 666]', () => {
    const salaries = [666, 666, 666, 666]
    const actual = topTwoSalaries(salaries)
    expect(actual).toEqual([666])
  })
})
