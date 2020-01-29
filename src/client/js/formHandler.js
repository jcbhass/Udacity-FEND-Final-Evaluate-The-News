import axios from 'axios';


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText) 

   
    console.log("::: Form Submitted :::")
    axios('http://localhost:8080/test')//fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message;
        document.getElementById('polarity').innerHTML = res.polarity;
        document.getElementById('subjectivity').innerHTML = res.subjectivity_confidence;
        document.getElementById('text').innerHTML = res.text;
    })
  
}



export { handleSubmit }

// //JS 2020 course 
// import axios from 'axios';

// async function getResults(query) {
//     const proxy = 'https://cors-anywhere.herokuapp.com/';
//     const key = '';    
//     try{
//         const res = await axios(`${proxy}https://api.aylien.com/api/v1/sentiment`); //add key and rest
//         const recipes = res.data.recipes;
//         console.log(res);//recipes

//     } catch (error) {
//         console.log('error', error);
//     }
    
// }
// getResults(); //add test


// const fetchAylien = async (url, input) => {
//     const res = await fetch(url, {
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         text: input})
//     });
//     try {
//         const data = await res.json();
//         if(res.status >= 200 && res.status < 400) {
//             //const list = document.createElement('li');
//             document.getElementById('polarity').innerHTML = data.polarity;
//             document.getElementById('polarity_confidence').innerHTML = data.polarity_confidence;
//             document.getElementById('subjectivity').innerHTML = data.subjectivity;
//             document.getElementById('subjectivity_confidence').innerHTML = data.subjectivity_confidence;
//             document.getElementById('text').innerHTML = data.text;
//         }
//         e
