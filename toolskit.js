"use strict";
var crypto = require('crypto');
var useragent = require('useragent');

/**
 * des-ede3加密
 * @param  {String} tkn   Tokens
 * @param  {String} dsKey Key
 * @return {String}       加密結果
 */
function decryptTkn(tkn, dsKey) {
    var decipher = crypto.createDecipheriv('des-ede3', new Buffer(dsKey), new Buffer(0));
    var txt = decipher.update(tkn, 'base64', 'utf8');
    txt += decipher.final('utf8');
    return txt.slice(0, 32);
}
exports.decryptTkn = decryptTkn;

function detectDevice(req) {
    var userAgent = (req.headers['user-agent'] || '').toLowerCase();
    switch (true) {
        case userAgent.indexOf('iphone') !== -1:
            return 'iphone';
        case userAgent.indexOf('ipod') !== -1:
            return 'ipod';
        case userAgent.indexOf('ipad') !== -1:
            return 'ipad';
        case userAgent.indexOf('android') !== -1:
            return 'android';
        default:
            return 'desktop';
    }
}
exports.detectDevice = detectDevice;

function isIe8(req) {
    var agent = useragent.is(req.headers['user-agent']);
    return agent.ie && (agent.version * 1 <= 8);
}
exports.isIe8 = isIe8;

function useragentList(req) {
    var agent = useragent.is(req.headers['user-agent']);
    return agent;
}
exports.useragentList = useragentList;

function getToday(shiftDay) {
    if (shiftDay === void 0) { shiftDay = 0; }
    var now = new Date();
    if (shiftDay !== 0) {
        now.setDate(now.getDate() + shiftDay);
    }
    return getDay(now);
}
exports.getToday = getToday;

function getDay(date) {
    return date.getFullYear() + "-" + (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
}
exports.getDay = getDay;
