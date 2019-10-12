const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbname= 'Db_test';

mongoClient.connect(url, function(err,result){
    assert.equal(null,err);
    console.log('Successfully connected to mongodb...');

    const db= result.db(dbname);
    insertDocument(db,function(){
        result.close();
    });
});

//function to insert data

const insertDocument= function(db,callback){
    //create ref for collection
    const collection = db.collection('be-practical');

    //objects(data)
    const data = [
        {
            name:'React js',
            fee: 1221,
            duration: '2 months',
            availability: true
        },
        {
            name:'React Native',
            fee: 12255,
            duration: '2 months',
            availability: true
        },
        {
            name:'Angular 8',
            fee: 12291,
            duration: '2 months',
            availability: true
        },
        {
            name:'Vue js',
            fee: 12281,
            duration: '2 months',
            availability: true
        },
    ];

    //handle Callbacks

    collection.insertMany(data,function(err,result){
        assert.equal(err,null);
        assert.equal(data.length,result.ops.length);
        console.log(`${data.length} values are successfully inserted.`);
        callback(result);
    });
};