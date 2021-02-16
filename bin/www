#!/usr/bin/env node

let app = require('../app')

const http = require('http')

let server = http.createServer(app)

// Handle and log specific listen errors
server.on('error', error => {
  if (error.syscall !== 'listen') { throw error }
  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${process.env.PORT} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(`Port ${process.env.PORT} is already in use`)
      process.exit(1)
      break
    default:
      throw error
  }
})

// Go!
server.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}`))