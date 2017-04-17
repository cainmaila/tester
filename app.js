var MongoClient = require('mongodb').MongoClient;

var uri = 'mongodb://localhost:27017/demo';
//寫物件
MongoClient.connect(uri, function(err, db) {
    var collection = db.collection('test');
    collection.insertMany([{
        aa: 2
    }], function(err, result) {
        console.log(result);
        db.close();
    })
});

//取物件
// MongoClient.connect(uri, function(err, db) {
//     var collection = db.collection('test');
//     collection.find({}).toArray(function(err, docs) {
//         console.log(docs);
//         db.close();
//     })
// });

//更新
// MongoClient.connect(uri, function(err, db) {
//     var collection = db.collection('test');
//     collection.updateOne({ 'aa': 4 }, { 'aa': 10 }, function(err, docs) {
//         console.log(docs);
//         db.close();
//     })
// });
