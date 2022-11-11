const mongoos = require("mongoose")
const colors = require("colors")

const connectDB = async ()=>{
    try {
        const conn = await mongoos.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`.red)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB