import axios from 'axios';


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText) 

   
    console.log("::: Form Submitted :::")
    var name = document.getElementById('name').value;
    axios.post('http://localhost:8080/article', {articleUrl: name})
    .then(function(res) {
        console.log(res);
        const data = res.data;
        document.getElementById('polarity').innerHTML = data.polarity;
        document.getElementById('subjectivity').innerHTML = data.subjectivity_confidence;
        document.getElementById('text').innerHTML = data.text;
    })
  
}



export { handleSubmit }

