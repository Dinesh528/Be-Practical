const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbname= 'Db_test';

mongoClient.connect(url, function(err,result){
    assert.equal(null,err);
    console.log('Successfully connected to mongodb...');

    const db= result.db(dbname);
    findDocuments(db,function(){
        result.close();
    });
});

const findDocuments = function(db,callback){
    const collection = db.collection('be-practical');

        collection.find({ name: 'React js'}).toArray(function(err,result){
            assert.equal(err,null);
            console.log('The documents are..',result);
            callback(result);
        });
};