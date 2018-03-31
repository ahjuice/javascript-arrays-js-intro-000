var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arrayName, elementToAdd) {
  return [elementToAdd, ...arrayName]
}

function destructivelyAddElementToBeginningOfArray(arrayName, elementToAdd) {
  arrayName = arrayName.unshift(elementToAdd)
}
