const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)



console.log(`Your API key is ${process.env.API_KEY}`);

textapi.sentiment({
    'text': 'John is a very good football player!'
  }, function(error, response) {
    if (error === null) {
      console.log(response);
    }
  });


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


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

// // Async POST
// const postData = async ( url = '', data = {})=>{
//     try{
//     const response = await fetch(url, {
//       method: 'POST', 
//       credentials: 'same-origin', 
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data), // body data type must match "Content-Type" header        
//     });
//   }catch(error){
//     console.log("error", error);
//   }
  
//   }