//mocha test.js

var should = require('should');
var decryptTkn = require('./toolskit').decryptTkn;
var getDay = require('./toolskit').getDay;
var getToday = require('./toolskit').getToday;
describe('Toolskit 測試', function() {
    before(function() {
        // 任何需要在測試前執行的程式
    });
    after(function() {
        // 任何需要在測試後刪除的資料
    });
    describe('decryptTkn 測試', function() {
        it('解密', function() {
            decryptTkn("HrrddknAXNca8+NMSLpTDs5JEBw2vNC60kZ7ahtl4bcSvoh3dkA27w==", "WTW6rzd1Xx5xHRfDe8UORtv6").should.equal('e503afdfe06b4a98bca7b1d87d7cddc5');
        });
    });
    describe('getDay 取回時間格式', function() {
        it('今天', function() {
            getDay(new Date()).should.equal('2016-02-15');
        });
        it('2016/8/8', function() {
            getDay(new Date('2016/8/8')).should.equal('2016-08-08');
        });
        it('getToday 測試', function() {
            getToday(-15).should.equal('2016-01-31');
        });
    });
});
