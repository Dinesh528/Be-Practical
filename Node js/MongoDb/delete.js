const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbname= 'Db_test';

mongoClient.connect(url, function(err,result){
    assert.equal(null,err);
    console.log('Successfully connected to mongodb...');

    const db= result.db(dbname);
    deleteDocument(db,function(){
        result.close();
    });
});

const deleteDocument = function (db,callback){
    const collection = db.collection('be-practical');

    collection.deleteOne({'name':'React Updated'}, function(err,result){
        assert.equal(err,null);
        console.log('The document is Deleted..');
        callback(result);
    });
};