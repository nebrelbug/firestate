// This code is largely derived from krasimir's EventBus. All credit goes to them.

export var listeners = {

}

export function subscribe (eventName, callback) {
  if (typeof listeners[eventName] !== 'undefined') {
    listeners[eventName].push({ callback: callback }) // Storing it in an object, just in case new features are added
  } else {
    listeners[eventName] = [{ callback: callback }]
  }
}

export function unsubscribe (eventName, callback) {
  if (typeof listeners[eventName] !== 'undefined') {
    var eventListenersLength = listeners[eventName].length
    var newArray = []
    for (var i = 0; i < eventListenersLength; i++) {
      var currentListener = listeners[eventName][i]
      if (currentListener.callback == callback) { // eslint-disable-line eqeqeq
        // Then this is the listener we want to remove
        // We won't push it to the new array
      } else {
        newArray.push(currentListener)
      }
    }
    listeners[eventName] = newArray
  }
}

export function subscribed (eventName, callback) {
  if (typeof listeners[eventName] !== 'undefined') {
    var numOfCallbacks = listeners[eventName].length
    if (callback === undefined) { // If we're just checking if it has listeners, like subscribed("EVENT")
      return numOfCallbacks > 0
    }
    for (var i = 0; i < numOfCallbacks; i++) {
      var currentListener = listeners[eventName][i]
      if (currentListener.callback == callback) { // eslint-disable-line eqeqeq
        return true
      }
    }
  }
  return false // There are no listeners for this event
}
