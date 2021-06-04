const deepCopy = (value) => {
  if (Array.isArray(value)) {
    return value.map(val => deepCopy(val))
  }

  if (typeof value === 'object') {
    let newVal = {}

    for (const [key, val] of Object.entries(value)) {
      newVal[key] = deepCopy(val)
    }

    return newVal
  }

  return value
}
