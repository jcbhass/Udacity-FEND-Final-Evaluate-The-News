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


// <!DOCTYPE html>
// <html>
// <body>

// <p>When you enter the input field, a function is triggered which sets the background color to yellow. When you leave the input field, a function is triggered which sets the background color to red.</p>

// Enter your name: <input type="text" id="myInput" onfocus="focusFunction()" onblur="blurFunction()">

// <script>
// function focusFunction() {
//   // Focus = Changes the background color of input to yellow
//   document.getElementById("myInput").style.background = "yellow";
// }

// function blurFunction() {
//   // No focus = Changes the background color of input to red
//   document.getElementById("myInput").style.background = "red";
// }
// </script>

// </body>
// </html>


// https://www.dailymail.co.uk/news/article-7910421/Phoenix-police-3-children-pronounced-dead-inside-home.html   neg 0.96

// https://www.dailymail.co.uk/news/article-7911819/California-teens-died-man-chased-intentionally-rammed-car-identified.html neg 0.98

// https://www.dailymail.co.uk/tvshowbiz/article-7912467/Tim-Tebow-gives-fans-look-pre-wedding-preparations-marrying-Demi-Leigh-Nel-Peters.html pos .99

// https://api.aylien.com/api/v1/sentiment?language=en&mode=document&input=https%3A%2F%2Fwww.dailymail.co.uk%2Ftvshowbiz%2Farticle-7912467%2FTim-Tebow-gives-fans-look-pre-wedding-preparations-marrying-Demi-Leigh-Nel-Peters.html&url=https%3A%2F%2Fwww.dailymail.co.uk%2Ftvshowbiz%2Farticle-7912467%2FTim-Tebow-gives-fans-look-pre-wedding-preparations-marrying-Demi-Leigh-Nel-Peters.html&

