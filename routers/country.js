'use strict'

//IMPORTAMOS EXPRESS
var express = require('express')
//IMPORTAMOS EL CONTROLADOR
var countryController = require('../controllers/country')

//INSTANCIAMOS UN OBJETO ROUTER
var api= express.Router(); 

//DEFINIMOS EL RECURSO GET CON URL: /api/auto/:id? , RECIBE    
// UN PARAMETRO Y SE PROCESA EN EL METODO PRUEBA DEL CONTROLADOR 
//autoController 

// ? significa que puede ser requerido o no 

api.get('/country/:id?',countryController.getCountry)
api.get('/countries/',countryController.getCountries)
api.post('/country',countryController.saveCountry)
api.put('/country/:id?',countryController.updateCountry)
api.delete('/country/:id?', countryController.deleteCountry)

//PARA UTILIZARLO EN OTROS FICHEROS A IMPORTAR 
module.exports = api;