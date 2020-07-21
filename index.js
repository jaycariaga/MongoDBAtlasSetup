
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://<user>:<password@mycluster------.mongodb.net/androidproj?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {

  console.log('goteeem');
  // perform actions on the collection object
  client.close();
});
