const express = require("express")
const {  errorHandler } = require("./middlewares/errorMiddleware")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 7000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goal', require("./routes/goalRoute"))

app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Sever is running at the port ${port}`)
})
