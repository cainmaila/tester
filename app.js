const logPlugin = require('log-plugin')
logPlugin.init(['ffMpegToolKit'])
logPlugin.setLogLv('ffMpegToolKit', 'all')
const ffMpegToolKit = require('./ffMpegToolKit.js')

ffMpegToolKit.h360ToMp4('30fps', 'zoom/%03d.jpg')
    .then(console.log)
    .catch(console.error)