'use strict'

//IMPORTAMOS EXPRESS
var express = require('express')
//IMPORTAMOS EL CONTROLADOR
var autoController = require('../controllers/auto')

//INSTANCIAMOS UN OBJETO ROUTER
var api = express.Router(); 

//DEFINIMOS EL RECURSO GET CON URL: /api/auto/:id? , RECIBE    
// UN PARAMETRO Y SE PROCESA EN EL METODO PRUEBA DEL CONTROLADOR 
//autoController 

// ? significa que puede ser requerido o no 

api.get('/auto/:id?',autoController.getAuto)
api.get('/autos/',autoController.getAutos)
api.post('/auto',autoController.saveAuto)
api.put('/auto/:id?',autoController.updateAuto)
api.delete('/auto/:id?', autoController.deleteAuto)

//PARA UTILIZARLO EN OTROS FICHEROS A IMPORTAR 
module.exports = api;