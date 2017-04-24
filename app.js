const unzip = require('unzip')
const fs = require('fs')
// fs.createReadStream('a.zip').pipe(unzip.Extract({ path: 'a' }))
fs.createReadStream('R360.zip').pipe(unzip.Extract({ path: 'b' }))
    .on('close', (e) => {
        console.log('end')
    })
    .on('error', console.error)