const express = require("express")
require("dotenv").config()
const bodyParser = require("body-parser")
const sequelize = require("./config/sequelize")
const User = require("./models/user")
const userRoute = require("./users-route/user.route")

const PORT = process.env.PORT

const app = express()

app.use(bodyParser.json())
app.use("/users", userRoute)

app.get("/", (req,res)=>{
  return res.json({
    message:"Welcome to mSeller. We coonect sellers to consumers"
  })
})


sequelize
  .authenticate()
  .then(() => {
    console.log("database connection is successful");
  })
  .catch((err) => {
    console.log("database connection failed", err);
  });

app.listen(PORT, ()=>{
    console.log(`app has started running at: http://localhost:${PORT}`)
})