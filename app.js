import express from 'express'
import cors from 'cors'
import {myRouter} from './routes/routes.js'
//import dbConfig from './config/db.config.js'

import { sequelize } from './config/db.config.js'


const app = express()



//function testConnection(){
  //  try{
        //sequelize.authenticate()
    //.then(()=>{
      //  console.log('conexion establecida')
    //})

    //}catch(err){
        //console.log(err)
    //}
//}

//testConnection()



//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))



//
app.use('/api',myRouter())



app.listen(3000)