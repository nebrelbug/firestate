var { dispatch, use } = require('../dist/firestate.dev.js')

dispatch('hi', {})
use({ hi: function () { console.log('hi reducer called') } })
