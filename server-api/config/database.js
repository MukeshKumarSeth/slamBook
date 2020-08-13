
const Mongoose = require('mongoose');
module.exports =Mongoose.connect("mongodb://localhost:27017/slamBook",{useNewUrlParser:true},(err)=>{
    if(!err){console.log('db connected');}else{
        console.log('error hai bhai'+err);
    }

});