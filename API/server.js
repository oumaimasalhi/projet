const express= require ('express');
const connectDb=require('./config/connectDb')
const app= express();
require('dotenv').config()
const PORT = process.env.PORT || 4000;

app.use (express.json())
connectDb();
app.listen (PORT,(err)=>{
if (err)throw console.error(err);
console.log(`Listento port `+ PORT)
})
 