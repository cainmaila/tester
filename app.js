const debug = require('debug')
const log = debug('log')
const logi = debug('info')
const err = debug('error')
const logg = debug('nowshow')
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const fs = require('fs')
const rp = require('request-promise')
var mime = require('mime')
const upload = multer({ dest: 'uploads/' })
const app = express()
const filePath = 'lemu.jpg'
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/from', upload.single('fp1'), (req, res) => {
    logg('req.file', req.file)
    logi('req.body', req.body)
    res.json(true)
    process.exit()
})
app.get('/', upload.single('fp1'), (req, res) => {
    logi('post fromData..')
    fs.readFile(filePath, (err, data) => {
        log('err, data', err, data)
        data ? postFormData(data, mime.lookup(filePath)) : ''
    })
    res.json(true)
})
app.listen(80, () => log('Server run in 80 port !!'))

rp.get('http://127.0.0.1')
    .then(resData => log('resData', resData))
    .catch(error => err('rp.get', err))

function postFormData(buf, mime) {
    logi('postFormData', buf)
    let formData = {
        fp1: {
            value: buf,
            options: {
                filename: 'xxx',
                contentType: mime
            }
        },
        name: 'cain'
    }
    rp.post('http://127.0.0.1/from', { formData: formData })
        .then(resData => log('/from', resData))
        .catch(error => err('/from', err))
}
