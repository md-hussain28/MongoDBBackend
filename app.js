import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import contactRoutes from './routes/contactRoutes.js'
import errorHandler from './middleware/errorHandler.js';
import connectDb from './config/dbConnect.js';


connectDb();
const app=express();


app.use(express.json());

app.use("/api/contacts",contactRoutes);

app.use(errorHandler);

const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`server running on ${port}`);
    
})
