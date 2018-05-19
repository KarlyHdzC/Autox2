'use strict'

var Modelo = require('../models/Modelo')
var mongoose = require('mongoose')

function saveModelo(req,res){
    //Definimos el objeto que se guardara como documento
    var modelo = new Modelo(req.body);

    modelo.save(function(err,modeloSaved){
        if(err){
            console.log(err)
            res.status(500).send({message: 'Error al guardar el Modelo', error:err});
        }else{
            res.status(200).send({modeloSaved})
        }
    });
};

//Definimos los metodos que pueden ser alcanzables
module.exports = {
    saveModelo
}