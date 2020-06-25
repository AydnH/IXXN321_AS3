const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const API_PORT = process.env.PORT || 3100;

// Importing urls
const {
  generateGetUrl,
  generatePutUrl
} = require('./AWSPresigner');

// GET 
app.get('/generate-get-url', (req, res) => {
  // Key and ContentType are defined in client 
  // Key is name of the file.
  const { Key } = req.query;
  generateGetUrl(Key)
    .then(getURL => {      
      res.send(getURL);
    })
    .catch(err => {
      res.send(err);
    });
});

// PUT 
app.get('/generate-put-url', (req,res)=>{
  // Key and ContentType are defined in client 
  // Key is name of the file.
  // ContentType is MIME content type, image/*
  const { Key, ContentType } =  req.query;
  generatePutUrl(Key, ContentType).then(putURL => {
    res.send({putURL});
  })
  .catch(err => {
    res.send(err);
  });
});

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
