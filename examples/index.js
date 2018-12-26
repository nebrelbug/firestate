var { dispatch, use } = require('../dist/firestate.dev.js')

use(require('./reducers.js'))
dispatch('ADD_TODO', { name: 'Buy milk', date: 'Tomorrow' })
