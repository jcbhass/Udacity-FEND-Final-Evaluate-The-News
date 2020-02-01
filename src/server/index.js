const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
var aylien = require('aylien_textapi');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)



console.log(`Your API key is ${process.env.API_KEY}`);

var textapi = new aylien ({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.post('/article', function (req, res) {
  // // return res.status(200).json(req.body);
 // // req.body = {text: 'https://www.nytimes.com/2020/01/31/opinion/soros-facebook-zuckerberg.html'}
  //res.send(mockAPIResponse)
  textapi.sentiment({
      url: req.body.articleUrl,
      mode: 'document',
    }, function(error, response) {
      if(error) {
        return res.status(400).json(error);
      }
      
      return res.status(200).json(response);
    });
})


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log(`App listening on port 8080!`)
})


//const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})




// curl https://api.aylien.com/api/v1/sentiment \ 
//    -H "X-AYLIEN-TextAPI-Application-Key: YOUR_APP_KEY" \
//    -H "X-AYLIEN-TextAPI-Application-ID: YOUR_APP_ID" \
//    -d mode="tweet" \
//    -d text="John+is+a+very+good+football+player"

// HTTP Request
// GET https://api.aylien.com/api/v1/sentiment
// POST https://api.aylien.com/api/v1/sentiment
// Parameters
//  Sample response (JSON):

// {
//   "polarity":"positive",
//   "subjectivity":"subjective",
//   "text":"John is a very good football player",
//   "polarity_confidence":0.9999936601153382,
//   "subjectivity_confidence":0.9963778207617525
// }

 