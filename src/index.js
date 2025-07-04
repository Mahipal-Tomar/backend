// require('dotenv').config()

import dotenv from "dotenv";
import connectDB from "./database/index.js";


dotenv.config({
    path:'./env'
}); // Load from .env in root

console.log("DB URI:", process.env.MONGODB_URI); // Should NOT be undefined

connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})

.catch((err)=>{
    console.log("MONGO db connection failed !!!",err);
})








/*  BASICS CODE THAT HAVE FUNCTION IN INDEX.JS FILE NOT IN OTHER FILE
import express from "express"

const app = express()

(async()=>{
    try{
    await mongoose.connect(`${process.env.MONGODB_URI}/$
        {DB_NAME}
    `)
        app.on("express error",(error)=>{
            console.log("Errr:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listenning on port ${process.env.PORT}`);
        })


    }catch(error){
        console.error("ERROR:",error)
        throw err
    }
})()   */
