const { join } = require('path')

module.exports = app => {
    app.set('views', join(__dirname, '..', 'views'))
    app.set('view engine', 'hbs')
}