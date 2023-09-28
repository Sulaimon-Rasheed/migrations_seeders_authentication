const mongoose = require ("mongoose")

const Schema = mongoose.Schema

const adminSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    user_id:[{type:Schema.Types.ObjectId, ref:"users"}]
})

module.exports = mongoose.model("admins", adminSchema)