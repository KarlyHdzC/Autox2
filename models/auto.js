'use strict'

var mongoose = require('mongoose'),
Schema = mongoose.Schema; 


//Representa el tipo de documentos en la base de datos 
var AutoSchema = new Schema(
    {
        marca:{
            type: String,
            trim: true, 
            default: '', 
            required: 'Inserta una marca por favor',
            index: {
                unique: false
            }
        },
        modelo:{
            type: String,
            required: 'Inserta un modelo por favor',
            default: '', 
            index: {
                unique: false
            }
        },  
        anio:{
            type: Number,
            trim: true,
            required: 'Inserta un año por favor',
            default: '', 
            index: {
                unique: false
            }
        },                
        version:{
            type: String,
            trim: true,
            default: '', 
            required: 'Inserta una version por favor',
            index: {
                unique: false
            }
        }, 
        colores:[String],
        
       /* serialVersion:{
            type:String, 
            trim: true, 
            required: 'Inserta un serialVersion por favor', 
            index:{
                unique: true, 
                dropDups: true
            }
        },*/

        motorInfo:{
            transmision:{
                type: String, 
                require: 'Inserta una transmision por favor',
                default: '',
                index:{
                    unique: false, 
                    dropDups: true
                },
                enum: [
                    'manual',
                    'automatico'
                ]
            },
        }

    },
    {
        timestamps: true
    }
);

//DEFINIMOS EL NOMBRE DE LA COLECION EN NUESTRO CASO 'AUTO',
//EN LAS OPERACIONES DE NUESTRO CONTROLADOR 
var Auto = mongoose.model('Auto', AutoSchema);

//podra ser accedidodesde cualquier parte si se importa como: 
module.exports = Auto;