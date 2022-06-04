exports.topTwoSalaries = function topTwoSalaries (salaries) {
  if (!Array.isArray(salaries) || salaries.length === 0) return []

  // remove duplicates
  const deduplicatedSalaries = Array.from(new Set(salaries))

  if (deduplicatedSalaries.length === 1) return [deduplicatedSalaries[0]]

  let first = deduplicatedSalaries[0]
  let second

  for (let i = 1; i < deduplicatedSalaries.length; i++) {
    const salary = deduplicatedSalaries[i]
    if (salary > first) {
      second = first
      first = salary
    } else if (second == null || salary > second) {
      second = salary
    }
  }

  return [first, second]
}
