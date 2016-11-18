/**
 * @file
 * API服務器入口
 * @requires express
 * @requires file-server.js
 * @todo    Express服務入口
 * @todo    Express錯誤處理
 */
'use strict';
var path = require('path');
var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var multer = require('multer');
var uploadPath = path.join(__dirname, '..', 'upload'),
    upload = multer({ dest: uploadPath }),
    cpUpFile = upload.fields([{ name: 'aa', maxCount: 1 }]);
/**
 * Express PORT
 * @global
 * @type {Number}
 * @default 80
 */
var port = 80;

/**
 * express實例
 * @type {express}
 */
var app = express();
app.use(methodOverride());
app.use(compression());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/fp', function(req, res) {
    cpUpFile(req, res, function(err) {
        var aa = req.files['aa'][0].path;
        console.log(aa);
        res.send(aa);
    })

});

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
app.use(status404);
app.listen(port, function() {
    console.log('runing Oview API Server in ' + port + ' port...');
});

/**
 * 錯誤輸出
 */
function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

/**
 * 500錯誤
 */
function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({
            error: 'Something failed!'
        });
    } else {
        next(err);
    }
}

/**
 * 500錯誤
 */
function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', {
        error: err
    });
}

/**
 * 404錯誤
 */
function status404(req, res) {
    res.status(404).send('404 error');
}
