export function dispatch (actionName, data) {
  console.log('Dispatching event "' + actionName + '"')
  reducers[actionName](data)
}

export var reducers = {

}

export function use (reducerObject) {
  console.log('Using reducers')
  for (var key in reducerObject) {
    if (reducerObject.hasOwnProperty(key)) {
      reducers[key] = reducerObject[key]
    }
  }
}

export function clear () {
  reducers = {}
  console.log('Cleared all reducers')
}
