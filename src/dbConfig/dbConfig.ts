import mongoose, { connection } from "mongoose";
 export async function name() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log('MongoDB connected')
        })
        connection.on('error',(err)=>{
            console.log('MongoDB connection error. '+err)
            process.exit();
        })
    } catch (error) {
        console.log(error);
    }
 }