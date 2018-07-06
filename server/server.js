let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
require('./modules/take-a-penny.js')(io);
const PORT = 5000;

app.use('/test',(req,res) => {
  res.send("Hi.");
})

app.use(express.static(`${__dirname}/../build`));



http.listen(PORT,() => console.log(`Listening on port ${PORT}`));