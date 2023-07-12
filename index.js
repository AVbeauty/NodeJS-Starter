const express = require('express');
const path = require('path');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('hello'); 
});

 // Start server
app.listen(3000, ()=>{ 
  console.log("Listening to the server on http://localhost:3000")
});
