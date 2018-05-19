'use strict' 

//IMPORTAMOS app.js
var app = require('./app');
var databse = require('./database');
//PUERTO 
var port = 7070 
app.listen(port,function(){
    console.log('Esto es un ejemplo de una API Puerto: ' + port)
});