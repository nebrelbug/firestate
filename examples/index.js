var { dispatch, use, subscribe } = require('../dist/firestate.dev.js')

use(require('./reducers.js'))
subscribe('ADD_TODO', function (data) { console.log('A new todo was added with data: %s. Better fetch new Firebase data', data) })
dispatch('ADD_TODO', { name: 'Buy milk', date: 'Tomorrow' })
