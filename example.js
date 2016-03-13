const stubbles = require('./index')

const fields = {
  first: 'Leonard',
  last: 'Lamprecht'
}

const compiled = stubbles.compile('{{first}} {{last}}', fields)

console.log(compiled)
