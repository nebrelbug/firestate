import { listeners } from './listeners'

export function dispatch (actionName, data) {
  console.log('Dispatching event "' + actionName + '"')
  if (typeof listeners[actionName] === 'object') {
    var shallowListeners = listeners[actionName].slice()
    var numOfCallbacks = shallowListeners.length
    for (var i = 0; i < numOfCallbacks; i++) {
      var currentListener = shallowListeners[i]
      if (currentListener && currentListener.callback) {
        currentListener.callback(data)
      }
    }
  }
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
