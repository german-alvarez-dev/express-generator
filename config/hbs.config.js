const { join } = require('path')
const hbs = require('hbs')

hbs.registerPartials(join(__dirname, '..', 'views', 'partials'))