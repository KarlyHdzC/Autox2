'use strict'

//Definimos el método a ser cosumido 
//desde el archivo de rutas 
var Marca = require('../models/Marca')
var mongoose = require('mongoose')

function saveMarca(req,res){
    //Definimos el objeto que se guardara como documento
    var marca = new Marca(req.body);

    //Creamos la fecha 
    var parts = req.body.fechaCreacion.split('-'); 
    marca.fechaCreacion = new Date(parts[0], parts[1]-1, parts[2])

    marca.save(function(err,marcaSaved){
        if(err){
            console.log(err)
            res.status(500).send({message: 'Error al guardar la Marca', error:err});
        }else{
            res.status(200).send({saved: marcaSaved})
        }
    });
}

//Definimos los metodos que pueden ser alcanzables
module.exports = {
    saveMarca
}