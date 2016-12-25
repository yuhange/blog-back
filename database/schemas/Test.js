var mongoose = require('../../mongoose.js'),
    Schema = mongoose.Schema;

var TestSchema = new Schema({          
    first : { type: String }     
});

module.exports = mongoose.model('Test', TestSchema);