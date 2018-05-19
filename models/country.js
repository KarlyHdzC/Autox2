'use strict'

var mongoose = require('mongoose'),
Schema = mongoose.Schema; 


//Representa el tipo de documentos en la base de datos 
var CountrySchema = new Schema(
    {
        nombre:{
            type: String,
            trim: true, 
            default: '', 
            required: 'Inserta un nombre por favor',
            index: {
                unique: false
            }
        },
        continente:{
            type: String,
            required: 'Inserta un continente por favor',
            default: '', 
            index: {
                unique: false
            }
        },  
        poblacion:{
            type: Number,
            trim: true,
            required: 'Inserta un numero de poblacion por favor',
            default: '', 
            index: {
                unique: false
            }
        },                
        idioma:{
            type: String,
            trim: true,
            default: '', 
            required: 'Inserta un idioma por favor',
            index: {
                unique: false
            }
        } 
    },
    {
        timestamps: true
    }
);

//DEFINIMOS EL NOMBRE DE LA COLECION EN NUESTRO CASO 'AUTO',
//EN LAS OPERACIONES DE NUESTRO CONTROLADOR 
var Country = mongoose.model('Country', CountrySchema);

//podra ser accedidodesde cualquier parte si se importa como: 
module.exports = Country;