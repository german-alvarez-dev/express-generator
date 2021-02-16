const { join } = require('path')
const sass = require('node-sass-middleware')

const options = {
    src: join(__dirname, '..', 'public'),
    dest: join(__dirname, '..', 'public'),
    sourceMap: true
}

module.exports = app => app.use(sass(options))