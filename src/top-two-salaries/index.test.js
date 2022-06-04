const { topTwoSalaries } = require('./index')

describe('topTwoSalaries', () => {
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
