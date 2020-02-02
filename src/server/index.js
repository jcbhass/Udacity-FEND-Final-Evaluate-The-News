const server = require('./server');
const PORT = 3000;
// designates what port the app will listen to for incoming requests
server.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});