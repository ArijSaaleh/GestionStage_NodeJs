const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Stagiaire= new Schema({ 
    cin:Number, 
    nom:String,
    prenom:String,
    genre:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:Number,
    option:String 
    });   
module.exports = mongoose.model('stagiaires', Stagiaire);