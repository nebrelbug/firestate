export default function dispatch (actionName, data) {
  console.log('called dispatch')
  reducers[actionName](data)
}

export var reducers = {

}

export function use (reducerObject) {
  console.log('called dispatch.use')
  for (var key in reducerObject) {
    if (reducerObject.hasOwnProperty(key)) {
      reducers[key] = reducerObject[key]
    }
  }
}

export function clear () {
  console.log('called dispatch.clear')
  reducers = {}
}
