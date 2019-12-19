var mongoose = require('mongoose');

var conSchema = mongoose.Schema({
    email:{type:String, require:true},
    title:{type:String, require:true},
    data:{type:String, require:true},
    link:{type:String, require:true},
 
});

module.exports = mongoose.model('MyCon', conSchema); 