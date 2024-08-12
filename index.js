import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import route from './routes/userroute.js'

const app = express()
app.use(bodyParser.json())
dotenv.config();

const PORT = process.env.PORT || 5000
const Mongurl = process.env.Mongo_url

mongoose
.connect(Mongurl)
.then(()=>
{
    console.log("Database Connected")
    app.listen(PORT,()=>
    {
        console.log(`listening to the port ${PORT}`)
    })
})
.catch((err)=>console.log(err))
app.use('/api/user',route);