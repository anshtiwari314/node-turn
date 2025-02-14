var Turn = require('node-turn');
let dotenv = require('dotenv');
const express = require('express')
let app = express()
dotenv.config()

let PORT = process.env.PORT || 3478
let HOST = process.env.HOST || '127.0.0.1'

console.log("the current port and host",PORT)

//app.set('host', '0.');


var server = new Turn({
  // set options
  listeningPort:PORT,
  listeningIps: ['0.0.0.0'],
  authMech: 'long-term',
  credentials: {
    anshtiwari314: "jokanomy-jarvis"
  }
});
server.start(()=>console.log(`TURN server is running on port ${PORT}`));