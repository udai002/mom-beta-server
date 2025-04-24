const express = require("express")
const cors = require("cors")
const connectDb = require("./config/db")
const session = require("express-session")
require("dotenv").config() 
const routes = require("./routes/order.routes")
const port = process.env.PORT || 3001

connectDb()
const app = express()
app.use(cors())
app.use(express.json())

app.use(session({
    secret: 'medicine on minute',      // 🔑 used to sign the cookie
    resave: false,                        // 💤 don't save session if unmodified
    saveUninitialized: false,            // 🐣 don't create session until something is stored
    cookie: {
      maxAge: 1000 * 60 * 60,            // 1 hour
      secure: false,                     // ⚠️ true if using HTTPS
      httpOnly: true                     // 🔐 can't access cookie via JS
    }
  }));


  app.use("/api" , routes)
app.use("/api/user" , require("./routes/user.routes"))

app.use("/" , (req , res)=>{
    res.send("welcome to mom pharmacy app ")
})


app.listen(port , ()=>{
    console.log(`app is listening at http://localhost:${port}`)
})