const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbname= 'Db_test';

mongoClient.connect(url, function(err,result){
    assert.equal(null,err);
    console.log('Successfully connected to mongodb...');

    const db= result.db(dbname);
    updateDocument(db,function(){
        result.close();
    });
});

const updateDocument = function (db,callback){
        const collection = db.collection('be-practical');

        collection.updateOne({'name':'React js'},{
            $set: {
                name: 'React Updated',
                fee: 25456,
                duration:  '2.3 months'
            }
        }, function (err,result){
            assert.equal(err,null);
            console.log('The document is updated..');
            callback(result);
        });
};