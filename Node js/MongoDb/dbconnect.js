const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbname= 'DB-test';

mongoClient.connect(url, function(err,result){
    assert.equal(null,err);
    console.log('Successfully connected to mongodb...');

    const db= result.db(dbname);
    result.close();
});