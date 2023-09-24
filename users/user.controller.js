const User = require("../models/user")

async function getUsers(req,res){
    const users = await User.findAll()
    return res.status(200).json(users)
}

async function createUser(req,res,next){
    try{
        const userInfo = req.body
        const newUser = await User.create(userInfo)
        return res.status(200).json(newUser)
    }catch(err){
        next(err)
    }
}

module.exports = {getUsers, createUser}