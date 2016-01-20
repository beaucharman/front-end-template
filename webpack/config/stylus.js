var path = require('path')
var constants = require('../constants')

module.exports = {
  use: [
    require('nib')(),
    require('rupture')(),
  ],
  import: [
    'nib',
    'rupture',
  ],
}
