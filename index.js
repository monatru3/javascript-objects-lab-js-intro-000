var recipes={};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object)
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object, { [key]: value})
  return object
}
