module.exports = {
  'ADD_TODO': function (data) {
    console.log('New todo with name: %s and date: %s', data.name, data.date)
  },
  'CHANGE_USERNAME': function (data) {
    console.log('New username: %s', data.newUsername)
  }
}
