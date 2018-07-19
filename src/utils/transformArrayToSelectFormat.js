const transformResponseToSelectFormat = (options, value, label) => {
  const transformedValues = []
  options.map(option => transformedValues.push({value: option[value], label: option[label]}))
  return transformedValues
}

export default transformResponseToSelectFormat
