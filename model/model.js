const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name : {
        type : String
    }, 
    title: {
        type : String
    },
    image : {
        type : String
    },
    user : [
        {
       type : mongoose.Schema.Types.ObjectId,
       ref : "User",
    },
    ],
});


const userSchema = new mongoose.Schema({
    comment : { 
        type : String,
     },
     like : {
        type :  Number,
     },
     read : {
        type :  String,
     },
     course :  {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course",
     },
     
    },  
)



let User = mongoose.model('User', userSchema);
let Course = mongoose.model('Course', courseSchema);

module.exports = { User , Course }

