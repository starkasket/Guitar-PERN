import express from "express";
import router from "./router";
import db from "./config/db";
import cors from "cors";

async function connectDB() {
    try {
        await db.authenticate();
        await db.sync();
        console.log("Conexión a la base exitosa");

    } catch (error) {
        console.log(error);
        console.log("Hubo un error al conectar.");

    }
}



const server = express();
server.use(cors({
    origin: "http://localhost:5173"

}))

server.use(express.json());

server.use('/api', router)

connectDB();
export default server;
