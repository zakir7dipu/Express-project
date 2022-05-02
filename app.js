const express = require("express");
const apiRouter = require("./src/routes/api");
const webRouter = require("./src/routes/web");
const app = new express();
// use db
require("./src/configs/db_config")

//security middlewares import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
//security middlewares implement
app.use(cors())
app.use(helmet())
app.use(xss())
app.use(hpp())
//request rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use(limiter);

//action middlewares import
const bodyParser = require("body-parser")
//action middlewares implement
app.use(bodyParser.json())

// Api Routes
app.use("/api/v1",apiRouter)
// Web Routes
app.use("/",webRouter)
// Undefine Routes
app.use("*",(req, res)=>{
    res.status(404).json({status:"fail", data:"Not Found/ Undefine URl"})
})

module.exports = app;
