const { join } = require('path')

module.exports = app => {
    app.use(require('node-sass-middleware')({
        src: join(__dirname, '..', 'public'),
        dest: join(__dirname, '..', 'public'),
        sourceMap: true
    }))
}