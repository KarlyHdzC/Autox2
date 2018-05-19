//IMPORTAMOS body-parser y express
var bodyParser = require('body-parser')
var express = require('express')

//Declaramos la variable app como instancia de express 
var app = express()

//importamos las rutas del recurso para autos 
var api_auto = require('./routers/auto')
var api_country = require('./routers/country')
var api_marca = require('./routers/marca')
var api_modelo = require('./routers/modelo')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//PRIMERA CAPA DE SEGURIDAD, CONTROL DE CABECERAS Y ACCESO
app.use(function(req,res,next){
    //Puede ser consumida desde cualquier lugar
    res.header('Access-Control-Allow-Origin','*');
    //Cabeceras permitidas
    res.header('Access-Control-Allow-Headers','X-API-KEY,Origin,X-Request-Width,Content-Type, Accept, Access-Control-Request-Method');
    //Metodos Permitidos 
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE'); 
    res.header('Allow','GET,POST,PUT,DELETE');
    next();
});

//URL DE LA API
app.use('/api',api_auto),
app.use('/api',api_country)
app.use('/api',api_marca)
app.use('/api',api_modelo)

//Para utilizarlo en otros ficheros, lo estamos exportando 
module.exports = app; 

