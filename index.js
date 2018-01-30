var recipes= {};


var updateObjectWithKeyAndValue= function(object, key, value) {
  object.Assign(object, {key: value})
  return object
}