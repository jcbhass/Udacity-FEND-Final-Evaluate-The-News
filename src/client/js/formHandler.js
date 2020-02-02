import axios from 'axios';
const validUrl = require('valid-url'); //method taken from https://www.npmjs.com/package/valid-url


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
        if (validUrl.isUri(formText)){
            console.log('Looks like an URI');
            Client.checkForName(formText) 
            console.log("::: Form Submitted :::")
            //var name = document.getElementById('name').value;
            axios.post('http://localhost:3000/article', {articleUrl: formText})
            .then(function(res) {
                console.log(res);
                const data = res.data;
                document.getElementById('polarity').innerHTML = data.polarity;
                document.getElementById('subjectivity').innerHTML = data.subjectivity_confidence;
                document.getElementById('text').innerHTML = data.text;
            })
        } else {
            console.log('Not a URI');
            document.getElementById('text').innerHTML = "Not a url.";
        } 
}



export { handleSubmit }

