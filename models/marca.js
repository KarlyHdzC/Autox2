'use strict'

var database = require('../database'),
mongoose = require('mongoose'),
Schema = mongoose.Schema; 

//var Modelo = require('./Modelo')

//Representa el tipo de documentos en la base de datos
var MarcaSchema = new Schema({
    nombre:{
        type: String, 
        trim: true, 
        default: '', 
        requiered: 'Inserta un nombre de la marca por favor',
        index:{
            unique: true,
            dropDups: true
        }
    },
    pais:{
        type: String, 
        trim: true, 
        default: '', 
        requiered: 'Inserta un pais de la marca por favor',
        index:{
            unique: true,
            dropDups: true
        }
    },   
    fechaCreacion:{
        type: Date, 
        trim: true, 
        default: '', 
        requiered: 'Inserta una fecha de creacion de la marca por favor',
        index:{
            unique: true,
            dropDups: true
        }
    }  
    
   // modelos:[Modelo.schema]
    },
    {
        timesstamps: true
    }
);

var Marca = mongoose.model('Marca', MarcaSchema);
module.exports = Marca;
