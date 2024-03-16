const mongoose=require('mongoose');
const studentdSchema=mongoose.Schema({
    name:String,
    age:Number,
    place:String
})
const studentModel=mongoose.model('student',studentdSchema)

module.exports=studentModel;