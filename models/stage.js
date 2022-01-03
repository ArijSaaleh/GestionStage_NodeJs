const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Stage= new Schema({  
    sujet:String,
    datedebut:String,
    datefin:String,
    });   
module.exports = mongoose.model('stages', Stage);