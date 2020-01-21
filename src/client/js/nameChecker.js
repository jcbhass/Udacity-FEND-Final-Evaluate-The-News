function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        document.getElementById('results').innerHTML = "Welcome, Captain!";
    }
}

export { checkForName }


// const updateUI = async () => {
//     // Gets data from the server
//     const request = await fetch('/all');

//     // Tries Shows the data
//     try{
//       const projectData = await request.json();
//       document.getElementById('date').innerHTML = projectData.date;
//       document.getElementById('temp').innerHTML = projectData.temperature+"&deg"+"F";
//       document.getElementById('content').innerHTML = projectData.feelings;
  
//     }catch(error){
//       console.log("error", error);
//     }
//   }