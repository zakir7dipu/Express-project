const app = require("../app");
const dotenv = require("dotenv")
dotenv.config({path:"./.env"})

app.listen(process.env.RUNNING_PORT,()=>{
    console.log(`Server run successfully at http://localhost:${process.env.RUNNING_PORT}`)
})