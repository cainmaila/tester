var logPlugin = require('./logPlugin.js')
logPlugin.init()
var log = logPlugin.getLog()
log(12345)
