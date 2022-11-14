//Grap our Dependencies:
const express = require('express'),
    app = express(),
    port = 3000;

// Static MiddleWare
app.use(express.static(__dirname + "/public"));

// Define View Engine 
app.set('view engine', 'ejs');

// Define Our Route
app.use(require('./routes/web'))

//Runing Application server
app.listen(port, () => {
    console.log(`server Runing on localhost:${port} \n to Run Your Application open your browser : \n type : https://localhost:3000`)
})