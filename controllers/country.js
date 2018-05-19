'use strict'

//Definimos el método a ser cosumido 
//desde el archivo de rutas 
var Country = require('../models/country')
var mongoose = require('mongoose')

function pruebaCountry(req, res) {
    if (req.params.id) {
        var id = req.params.id
    } else {
        var id = "SIN ID T.T"
    }
    res.status(200).send(
        {
            message: "Este es el id: " + id
        }
    )
}

//DEFINIMOS LAS FUNCIONES 
function getCountry(req, res) {
    res.status(200).send({ message: 'Entre a getCountry'});

    /*//Obtenemos el id que llega como parametro
    var autoId = req.params.id;
    //Verificamos si el parametro enviado es un ObjectId
    var idValido = mongoose.Types.ObjectId.isValid(autoId); 

    if(!idValido){
        //Si no es valido mostramos un mensaje de Id valido 
        res.status(409).send({message: 'Id invalido'});
    }else{
        //BUSCAREMOS UN DOCUMENTO POR EL ID PROPORCIONADO
        Auto.findById(autoId,function(err,auto){
            if(err){
                console.log(err)
                res.status(500).send({ message: 'Error al obtener el Auto.', error: err });                
            }else{
                if(!auto){
                    res.status(404).send({message: 'No existe el auto con el id proporcionado'});
                }else{
                    res.status(200).send({auto})
                }
            }
        });
    }
    //res.status(200).send({ data: autoId })*/
}

function getCountries(req, res) {
    res.status(200).send({ message: 'Entre a getCountries'});
    //console.log("Entre")
    //res.status(200).send({ metodo: "getAutos" })
    /*Auto.find({}).sort('anio').exec(function(err,autos){
        if(err){
            console.log(err)
            res.status(500).send({ message: 'Error al guardar el Auto.', error: err });
        }else{
            res.status(200).send({autos})
        }
    });*/
}

function saveCountry(req, res) {
    res.status(200).send({ message: 'Entre a saveCountry'});
    /*var auto = new Auto(req.body);

    auto.save(function (err, autoSaved) {
        if (err) {
            console.log(err)
            //if (err.error && err.error.message) {
              //  res.status(400).send({ message: err.error.message })
            //}else {
                res.status(500).send({ message: 'Error al guardar el Auto.', error: err });
            //}
        } else {
            res.status(200).send({ data: autoSaved })
        }
    });*/
};

function updateCountry(req, res) {
    res.status(200).send({ message: 'Entre a updateCountry'});

    /*
    //var params = req.body;
    //res.status(200).send({ metodo: "updateAuto", auto: params })
    
    //Obtenemos el id que llega como parametro
    var autoId = req.params.id; 
    //Verificamos si el parametro enviado es un ObjectId 
    var idValido = mongoose.Types.ObjectId.isValid(autoId);

    if(!idValido){
        //Si no es valido mostramos un mensaje de Id valido 
        res.status(409).send({message: 'Id invalido'});
    }else{
        //Utilizamos la función findByIdAndUpdate, busca un documento por id y lo actualiza         
        Auto.findByIdAndUpdate(autoId,req.body,{new: true},function(err,autoUpdate){
            if (err) {
                console.log(err)
                res.status(500).send({ message: 'Error al guardar el Auto.', error: err });
            }else{
                if(!autoUpdate){
                    res.status(404).send({message:'No existe el auto con el id proporcionado'})
                }
                else{
                    res.status(200).send({data:autoUpdate}) 
                }

            }
        });
    }*/
}

function deleteCountry(req, res) {
    res.status(200).send({ message: 'Entre a deleteCountry'});
    /*
    //Obtenemos el id que llega como parametro
    var autoId = req.params.id; 
     //Verificamos si el parametro enviado es un ObjectId 
     var idValido = mongoose.Types.ObjectId.isValid(autoId);

     if(!idValido){
        //Si no es valido mostramos un mensaje de Id valido 
        res.status(409).send({message: 'Id invalido'});
    }else{
        Auto.findByIdAndRemove({_id: autoId}, 
            function(err, auto){
             if(err) res.status(500).send({ message: 'Error al guardar el Auto.', error: err });
             else    res.status(200).send({message:'El auto se ha eliminado correctamente'})
         });
    }*/
}


//DEFINIMOSLOS MÉTODOS QUE PUEDEN SER ALCANZABLES 
module.exports = {
    pruebaCountry,
    getCountry,
    getCountries,
    saveCountry,
    updateCountry,
    deleteCountry
}
