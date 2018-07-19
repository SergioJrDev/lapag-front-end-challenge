const transformResponseToSelectFormat = (options) => {
  const transformedValues = []
  options.map(option => transformedValues.push({value: option._id, label: option.name}))
  return transformedValues
}

export default transformResponseToSelectFormat
