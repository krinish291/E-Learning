var mongoose = require('mongoose');

var feedbackSchema = mongoose.Schema({
    name:{type:String, require:true},
    
    email:{type:String, require:true},
    comments:{type:String, require:true},
 
});

module.exports = mongoose.model('FeedBack', feedbackSchema); 