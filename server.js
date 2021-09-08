const express = require('express');
const { MongoClient } = require('mongodb');



const uri = "mongodb+srv://user01:1234@blebeacon.htpi6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app = express();
const port = 3000;

// Configuring body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port);

app.post('/lastfound', function (req, res) {
   const msg = req.body;
   console.log("1 document retrieved");	
   
   client.connect(err => {
    const collection = client.db("fyp-ble").collection("beacons");
    if (err) throw err;
    var myquery = { _iid: msg.Address };
    collection.findOne(myquery)
    .then(userFound => {
    if (!userFound){
      return res.status(404).end();
    }
    console.log(JSON.stringify(userFound));
    return res.status(200).json({data: userFound})
    })
    .catch(err => console.log(err));
   });
})

app.post('/validuser', function (req, res) {
  const msg = req.body;
  console.log("User found");	
  
  client.connect(err => {
   const collection = client.db("fyp-ble").collection("beacons");
   if (err) throw err;
   var myquery = { _userId: msg.UserID };
   collection.findOne(myquery)
   .then(userFound => {
   if (!userFound){
     return res.status(404).end();
   }
   console.log(JSON.stringify(userFound));
   return res.status(200).json({data: userFound})
   })
   .catch(err => console.log(err));
  });
})

console.log('todo list RESTful API server started on: ' + port);