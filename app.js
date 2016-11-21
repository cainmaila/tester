var ToolKit = require('./toolskit.js');
var crypto = require('crypto');

// des - ede3解密

// console.log(signer('des-ede3', 'ssss', '1234'));

// var cipher = crypto.createCipheriv('des-ede3', new Buffer('WTW6rzd1Xx5xHRfDe8UORtv6'), new Buffer(0));
// cipher.setAutoPadding(false);
// var encrypted = cipher.update('e503afdfe06b4a98bca7b1d87d7cddc5', 'utf8', 'base64');
// encrypted += cipher.final('base64');
// console.log('a=' + encrypted);
// console.log('b=HrrddknAXNca8+NMSLpTDs5JEBw2vNC60kZ7ahtl4bcSvoh3dkA27w==');

// console.log(ToolKit.decryptTkn(encrypted, 'WTW6rzd1Xx5xHRfDe8UORtv6'))

// var cipher = crypto.createCipheriv('des-ede3', new Buffer('WTW6rzd1Xx5xHRfDe8UORtv6'), new Buffer(0));
// cipher.setAutoPadding(true);
// var ciph = cipher.update('123', 'utf8', 'base64');
// ciph += cipher.final('base64');
// console.log(ciph);


// var decipher = crypto.createDecipheriv('des-ede3', new Buffer('WTW6rzd1Xx5xHRfDe8UORtv6'), new Buffer(0));
// decipher.setAutoPadding(true);
// var txt = decipher.update(ciph, 'base64', 'utf8');
// txt += decipher.final('utf8');
// console.log(txt);

console.log(ToolKit.decryptTkn(ToolKit.getEncrypt('1234', 'WTW6rzd1Xx5xHRfDe8UORtv6'), 'WTW6rzd1Xx5xHRfDe8UORtv6'));
