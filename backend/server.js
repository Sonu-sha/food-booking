
import app from "./app.js";
import dotenv from "dotenv";
import  dbConnection  from "./database/dbConnection.js";

dotenv.config();
app.listen(process.env.PORT, ()=>{
    dbConnection();
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
});
