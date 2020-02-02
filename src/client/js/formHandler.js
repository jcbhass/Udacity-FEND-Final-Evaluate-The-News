import axios from 'axios';
const validUrl = require('valid-url'); 

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // checks that text in form field is in url format
    /*https://www.npmjs.com/package/valid-url*/
        if (validUrl.isUri(formText)){
            console.log('Looks like an URL');
            Client.checkForName(formText) 
            console.log("::: Form Submitted :::")
            axios.post('http://localhost:3000/article', {articleUrl: formText})
            .then(function(res) {
                console.log(res);
                const data = res.data;
                document.getElementById('polarity').innerHTML = data.polarity;
                document.getElementById('polarity_confidence').innerHTML = data.polarity_confidence.toFixed(2);
                document.getElementById('subjectivity').innerHTML = data.subjectivity;
                document.getElementById('subjectivity_confidence').innerHTML = data.subjectivity_confidence;
                document.getElementById('text').innerHTML = data.text;
            })
        } else {
            console.log('Not a URL');
            document.getElementById('text').innerHTML = "Not a url. Please enter a url. ";
        }; 
};



export { handleSubmit }

