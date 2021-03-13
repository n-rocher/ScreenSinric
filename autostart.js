const startup = require('user-startup')

const nodePath = process.execPath
const args = ['C:\\Users\\thena\\Desktop\\screen-ok-google\\index.js']
const out = 'C:\\Users\\thena\\Desktop\\screen-ok-google\\out.log'
 
// Creates startup script and spawns process
startup.create('Screen On-Off Google Home', nodePath, args, out)