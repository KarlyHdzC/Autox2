'use strict'

//IMPORTAMOS EXPRESS
var express = require('express')
//IMPORTAMOS EL CONTROLADOR
var countryController = require('../controllers/marca')

//INSTANCIAMOS UN OBJETO ROUTER
var api= express.Router(); 

//DEFINIMOS EL RECURSO GET CON URL: /api/auto/:id? , RECIBE    
// UN PARAMETRO Y SE PROCESA EN EL METODO PRUEBA DEL CONTROLADOR 
//autoController 

// ? significa que puede ser requerido o no 

api.post('/marca',countryController.saveMarca)

//PARA UTILIZARLO EN OTROS FICHEROS A IMPORTAR 
module.exports = api;