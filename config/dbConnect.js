import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb=async()=>{
    try{
        const connect=await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Databse Connected :",connect.connection.host,connect.connection.name);
        
    }catch(err){
        console.log("DATABASE connection Error :\n" ,err);
        
    }
}
export default connectDb;